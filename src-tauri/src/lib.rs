use std::sync::Mutex;
use tauri::async_runtime::spawn;
use tauri::{AppHandle, Manager, State};
use tokio::time::{sleep, Duration};

#[derive(serde::Serialize)]
pub struct Student {
    pub name: String,
    pub sex: String,
    pub age: u32,
}

#[tauri::command]
fn list_student() -> Vec<Student> {
    vec![
        Student {
            name: String::from("张三"),
            sex: String::from("男"),
            age: 18,
        },
        Student {
            name: String::from("李四"),
            sex: String::from("女"),
            age: 19,
        },
        Student {
            name: String::from("王五"),
            sex: String::from("男"),
            age: 20,
        },
    ]
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
    .plugin(
        tauri_plugin_sql::Builder::default()
            // .add_migrations("sqlite:mydatabase.db", migrations())
            .build(),
    )
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![list_student])
        // Run the app
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// Create a struct we'll use to track the completion of
// setup related tasks
// struct SetupState {
//     frontend_task: bool,
//     backend_task: bool,
// }

// A custom task for setting the state of a setup task
// #[tauri::command]
// async fn set_complete(
//     app: AppHandle,
//     state: State<'_, Mutex<SetupState>>,
//     task: String,
// ) -> Result<(), ()> {
//     // Lock the state without write access
//     let mut state_lock = state.lock().unwrap();
//     match task.as_str() {
//         "frontend" => state_lock.frontend_task = true,
//         "backend" => state_lock.backend_task = true,
//         _ => panic!("invalid task completed!"),
//     }
//     // Check if both tasks are completed
//     if state_lock.backend_task && state_lock.frontend_task {
//         // Setup is complete, we can close the splashscreen
//         // and unhide the main window!
//         // let splash_window = app.get_webview_window("splashscreen").unwrap();
//         // let main_window = app.get_webview_window("main").unwrap();
//         // splash_window.close().unwrap();
//         // main_window.show().unwrap();
//     }
//     Ok(())
// }

// // An async function that does some heavy setup task
// async fn setup(app: AppHandle) -> Result<(), ()> {
//     // Fake performing some heavy action for 3 seconds
//     println!("Performing really heavy backend setup task...");
//     sleep(Duration::from_secs(3)).await;
//     println!("Backend setup task completed!");
//     // Set the backend task as being completed
//     // Commands can be ran as regular functions as long as you take
//     // care of the input arguments yourself
//     set_complete(
//         app.clone(),
//         app.state::<Mutex<SetupState>>(),
//         "backend".to_string(),
//     )
//     .await?;
//     Ok(())
// }