@ echo OFF

REM This is a batch transliteration of build.sh for hapless Windows devs.  It
REM assembles things for local testing but does not sync to AWS.

REM In order for joint.py to run, the lxml library must be installed.
REM It's recommended to run this script in a virtualenv.

cd blockly
C:\Python27\python build.py
C:\Python27\python joint.py
cd ..

rmdir build /s /q
ROBOCOPY blockly build\js arduino_compressed.js blockly_compressed.js blocks_compressed.js /NFL /NDL /NJH /NJS /nc /ns /np > nul
ROBOCOPY blockly\apps\blocklyduino build header.js /NFL /NDL /NJH /NJS /nc /ns /np > nul
ROBOCOPY blockly\apps\blocklyduino\js\ build\js\ /NFL /NDL /NJH /NJS /nc /ns /np > nul
ROBOCOPY blockly\apps\blocklyduino\fonts\ build\fonts\ /NFL /NDL /NJH /NJS /nc /ns /np > nul
ROBOCOPY blockly\msg\js\ build\msg\js\ /NFL /NDL /NJH /NJS /nc /ns /np > nul
ROBOCOPY blockly\media\ build\media\ /NFL /NDL /NJH /NJS /nc /ns /np > nul
ROBOCOPY blockly\apps\blocklyduino\css\ build\css\ /NFL /NDL /NJH /NJS /nc /ns /np > nul
MOVE blockly\apps\blocklyduino\index.html build\index.html > nul
