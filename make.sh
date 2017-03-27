#!/bin/sh
echo "Building BlocklyDuino..."
cd blockly
python build.py
python joint.py
echo "Building offline-editor..."
cd ../offline-editor
sh copy.sh
