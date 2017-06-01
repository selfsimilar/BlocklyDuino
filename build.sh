#!/bin/sh

# In order for joint.py to run, the lxml library must be installed.
# It's recommended to run this script in a virtualenv.
cd blockly
python build.py
python joint.py
cd ..

rm -rf build && mkdir -p build/css && mkdir -p build/js && mkdir -p build/msg/js && mkdir -p build/media && mkdir -p build/fonts

cp blockly/arduino_compressed.js build/js/arduino_compressed.js
cp blockly/blockly_compressed.js build/js/blockly_compressed.js
cp blockly/blocks_compressed.js build/js/blocks_compressed.js
cp blockly/apps/blocklyduino/header.js build/header.js
cp blockly/apps/blocklyduino/js/* build/js/
cp -r blockly/apps/blocklyduino/fonts/* build/fonts/
cp blockly/msg/js/* build/msg/js/
cp blockly/media/* build/media/
cp blockly/apps/blocklyduino/css/*  build/css/
mv blockly/apps/blocklyduino/index.html build/index.html

cd build
aws s3 sync . s3://blockly.fusestudio.net --region us-east-2 --acl public-read
cd ..
