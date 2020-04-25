az.load_font("Staatliches")
az.style_body({
    "background": "rgb(28, 80, 121",
    "font-family": "Staatliches"
})
az.add_top_button({
    "this_class": "to_top_button",
    "text": "TOP",
    "side": "right"
})
az.style_button("to_top_button", 1, {
    "background": "rgb(233, 130, 94)"
})
az.add_sections({
    "this_class": "my_sections",
    "sections": 3
})
az.style_sections('my_sections', 1, {
    "background": "#222f3e",
    "height": "auto"
})
az.style_sections('my_sections', 2, {
    "background": "#222f3e",
    "height": "auto"
})
az.style_sections('my_sections', 3, {
    "background": "#222f3e",
    "height": "auto"
})
az.add_layout("my_sections", 1, {
    "this_class": "banner_layout",
    "row_class": "banner_layout_rows",
    "cell_class": "banner_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 3
})
az.style_layout("banner_layout", 1, {
    "width": "100%",
    "height": "auto",
    "align": "center",
    "border": 0
})
az.call_once_satisfied({
    "condition": "typeof(az.hold_value.extracted_defects_images) !== 'undefined'",
    "function": function() {
        az.add_text("banner_layout_cells", 1, {
            "this_class": "image_count",
            "text": "Number of images: " + az.hold_value.extracted_defects_images.length
        })
        az.all_style_text("image_count", {
            "color": "white",
            "font-size": "20px"
        })
        az.style_word("image_count", 1, {
            "this_class": "color_word",
            "word": az.hold_value.extracted_defects_images.length,
            "color": "rgb(233, 130, 94)"
        })
    }
})
az.add_text("banner_layout_cells", 2, {
    "this_class": "title",
    "text": "DEFECT TURKER"
})
az.style_text("title", 1, {
    "align": "center",
    "color": "whitesmoke",
    "font-size": "30px"
})
az.add_layout("banner_layout_cells", 3, {
    "this_class": "hold_icons",
    "row_class": "hold_icons_rows",
    "cell_class": "hold_icons_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})
az.style_layout("hold_icons", 1, {
    "width": "auto",
    "height": "auto",
    "align": "right",
    "border": 0
})
az.call_once_satisfied({
    "condition": "az.check_exists('hold_icons', 1)",
    "function": function() {
        az.add_icon("hold_icons_cells", 1, {
            "this_class": "my_icon_legend",
            "icon_class": "fa-square-o"
        })
        az.style_icon("my_icon_legend", 1, {
            "color": "white",
            "font-size": "36px",
            "cursor": "pointer",
            "margin": "8px"
        })
        az.add_event("my_icon_legend", 1, {
            "type": "click",
            "function": function() {
                az.add_modal({
                    "this_class": "show_legend_modal",
                    "content_class": "show_legend_modal_content"
                })
                az.style_modal("show_legend_modal", 1, {
                    "width": "700px",
                    "height": "auto"
                })
                az.add_image("show_legend_modal_content", 1, {
                    "this_class": "legend_img",
                    "image_path": "test_template.png"
                })
                az.style_image("legend_img", 1, {
                    "align": "center",
                    "width": "100%"
                })
            }
        })
        az.add_icon("hold_icons_cells", 2, {
            "this_class": "my_icon",
            "icon_class": "fa-download"
        })
        az.style_icon("my_icon", 1, {
            "color": "white",
            "font-size": "36px",
            "cursor": "pointer",
            "margin": "8px"
        })
        az.add_event("my_icon", 1, {
            "type": "click",
            "function": function() {
                if (az.hold_value.combo_for_csv.length !== 0) {
                    az.download_object_as_csv({
                        "data": az.hold_value.combo_for_csv,
                        "header": ['name', 'label'],
                        "filename": "image_labels.csv"
                    })
                } else {
                    alert("YOU HAVEN'T LABELLED ANY IMAGES!")
                }
            }
        })
        az.add_icon("hold_icons_cells", 3, {
            "this_class": "my_icon_settings",
            "icon_class": "fa-cogs"
        })
        az.style_icon("my_icon_settings", 1, {
            "color": "white",
            "font-size": "32px",
            "cursor": "pointer",
            "margin": "8px"
        })
        az.add_event("my_icon_settings", 1, {
            "type": "click",
            "function": function() {
                az.add_modal({
                    "this_class": "show_settings",
                    "content_class": "show_settings_content"
                })
                az.style_modal("show_settings", 1, {
                    "width": "300px",
                    "height": "auto",
                    "background": "whtiesmoke",
                    "max-height": "500px"
                })
                az.add_text('show_settings_content', 1, {
                    "this_class": "settings_title",
                    "text": "SETTINGS"
                })
                az.style_text("settings_title", 1, {
                    "align": "center",
                    "color": "black",
                    "font-size": "24px",
                    "font-family": "Staatliches",
                    "margin-bottom": "10px"
                })
                az.add_layout("show_settings_content", 1, {
                    "this_class": "settings_layout",
                    "row_class": "settings_layout_rows",
                    "cell_class": "settings_layout_cells",
                    "number_of_rows": 4,
                    "number_of_columns": 1
                })
                az.all_style_layout("settings_layout_cells", {
                    "halign": "center"
                })
                az.style_layout("settings_layout", 1, {
                    "width": "auto",
                    "height": "auto",
                    "align": "center",
                    "border": 0
                })
                az.add_input("settings_layout_cells", 1, {
                    "this_class": "path_input",
                    "placeholder": "training image path...",
                    "spellcheck": false
                })
                az.add_input("settings_layout_cells", 2, {
                    "this_class": "path_input",
                    "placeholder": "validation image path...",
                    "spellcheck": false
                })
                if (typeof(az.hold_value.train_path) !== 'undefined') {
                    az.add_value("path_input", 1, {
                        "value": az.hold_value.train_path
                    })
                }
                if (typeof(az.hold_value.valid_path) !== 'undefined') {
                    az.add_value("path_input", 2, {
                        "value": az.hold_value.valid_path
                    })
                }
                az.all_add_event("path_input", {
                    "type": "as_change",
                    "function": function() {
                        if (az.grab_value('path_input', 1) === '' || az.grab_value('path_input', 2) === '') {
                            az.hold_value.train_path = ''
                            az.hold_value.valid_path = ''
                        }
                    }
                })
                az.all_style_input("path_input", {
                    "margin-top": "10px"
                })
                az.add_text('settings_layout_cells', 3, {
                    "this_class": "slider_title",
                    "text": "TRAIN / VALIDATION SPLIT %"
                })
                az.style_text("slider_title", 1, {
                    "align": "center",
                    "color": "black",
                    "font-size": "20px",
                    "font-family": "Staatliches",
                    "margin-bottom": "10px",
                    "margin-top": "10px"
                })
                az.add_slider("settings_layout_cells", 3, {
                    "this_class": "split_slider",
                    "default_value": 0,
                    "min_value": 50,
                    "max_value": 90,
                    "text_class": "slider_txt"
                })
                if (typeof(az.hold_value.split_percentage) !== 'undefined') {
                    az.set_slider_value("split_slider", 1, Number(az.hold_value.split_percentage))
                } else {
                    az.set_slider_value('split_slider', 1, 50)
                }
                az.all_style_slider("split_slider", {
                    "color": "black"
                })
                az.style_text('slider_txt', 1, {
                    "margin-left": "10px"
                })
                az.add_button("settings_layout_cells", 4, {
                    "this_class": "save_settings",
                    "text": "SAVE"
                })
                az.style_button("save_settings", 1, {
                    "background": "rgb(233, 130, 94)",
                    "align": "center",
                    "outline": 0,
                    "border": "1px solid black"
                })
                az.add_event("save_settings", 1, {
                    "type": "click",
                    "function": function() {
                        az.animate_element("save_settings", 1, {
                            "type": "spin"
                        })
                        az.hold_value.train_path = az.grab_value('path_input', 1)
                        az.hold_value.valid_path = az.grab_value('path_input', 2)
                        az.hold_value.split_percentage = az.grab_value('split_slider', 1)
                        setTimeout(function() {
                            az.close_modal()
                        }, 1000)
                    }
                })
            }
        })
        az.add_layout("my_sections", 2, {
            "this_class": "my_layout",
            "row_class": "my_layout_rows",
            "cell_class": "my_layout_cells",
            "number_of_rows": 1,
            "number_of_columns": 2
        })
        az.style_layout("my_layout", 1, {
            "width": "700px",
            "height": "250px",
            "max-height": "500px",
            "align": "center",
            "border": 0
        })
        az.all_style_layout("my_layout_cells", {
            "height": "auto",
            "halign": "center"
        })
    }
})