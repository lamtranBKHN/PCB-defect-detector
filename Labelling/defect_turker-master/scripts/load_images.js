az.read_local_file({
    "file_path": "img/extracted_defects.json",
    "done": function(data) {
        az.hold_value.extracted_defects_images = Object.keys(data)
    }
})