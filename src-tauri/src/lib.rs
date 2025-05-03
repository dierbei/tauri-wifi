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
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
