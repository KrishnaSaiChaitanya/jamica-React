#!/bin/bash

# Function to convert .js to .jsx
convert_js_to_jsx() {
    # Loop through all .js files in the current directory
    for file in *.js; do
        # Check if the file exists
        if [ -e "$file" ]; then
            # Rename .js to .jsx
            mv "$file" "${file%.js}.jsx"
            echo "Converted: $file to ${file%.js}.jsx"
        fi
    done
}

# Recursive function to traverse subdirectories
traverse_directories() {
    local folder="$1"
    
    # Loop through all files and directories in the given folder
    for item in "$folder"/*; do
        # Check if the item is a directory
        if [ -d "$item" ]; then
            # Recursively call the function for subdirectories
            traverse_directories "$item"
        elif [ -f "$item" ]; then
            # Check if the item is a file
            # Change to the directory of the file
            cd "$(dirname "$item")"
            # Call the function to convert .js to .jsx
            convert_js_to_jsx
            # Change back to the original directory
            cd -
        fi
    done
}


if [ -z "$1" ]; then
    echo "Usage: $0 <folder>"
    exit 1
fi


cd "$1" || exit 1


traverse_directories .
