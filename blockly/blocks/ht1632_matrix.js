/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.HT1632_matrix');

goog.require('Blockly.Blocks');

Blockly.Blocks.HT1632_matrix.HUE = 215;

Blockly.Blocks.ht1632_16x24_matrix_image = filepath.media+'/ht1632_16x24_matrix.jpg';

Blockly.Blocks.HT1632_matrix.checkBlocks = function(obj) {
  var legal = null;
  var current = obj.type;
  var blocks = obj.workspace.getAllBlocks();
  for (var i = 0; i < blocks.length; i++) {
    if ((blocks[i].type == 'ht1632_matrix_fill' ||
         blocks[i].type == 'ht1632_matrix_setcursor' ||
         blocks[i].type == 'ht1632_matrix_print' ||
         blocks[i].type == 'ht1632_matrix_settextsize' ||
         blocks[i].type == 'ht1632_matrix_setbrightness' ||
         blocks[i].type == 'ht1632_matrix_settextwrap' ||
         blocks[i].type == 'ht1632_matrix_settextcolor' ||
         blocks[i].type == 'ht1632_matrix_drawpixel' ||
         blocks[i].type == 'ht1632_matrix_drawcircle' ||
         blocks[i].type == 'ht1632_matrix_drawrect' ||
         blocks[i].type == 'ht1632_matrix_drawline' ||
         blocks[i].type == 'ht1632_matrix_setrotation' ||
         blocks[i].type == 'ht1632_matrix_write') &&
        legal == null){
      legal = blocks[i].type != current;
    } 
    if(blocks[i].type == 'ht1632_matrix_begin'){
      return true;
    }
  }
  return legal;
};

Blockly.Blocks['ht1632_matrix_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_BEGIN_TITLE)
      .appendField(Blockly.Msg.HT1632_MATRIX_PIN_DATA)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "HT_DATA")
      .appendField(Blockly.Msg.HT1632_MATRIX_PIN_WR)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "HT_WR")
      .appendField(Blockly.Msg.HT1632_MATRIX_PIN_CS)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "HT_CS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    this.setWarningText(Blockly.Msg.HT1632_MATRIX_BEGIN_WARNING);
  }
};

Blockly.Blocks['ht1632_matrix_fill'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(new Blockly.FieldDropdown(
        [[Blockly.Msg.HT1632_MATRIX_SCREEN_CLEAR,'CLEAR'],
        [Blockly.Msg.HT1632_MATRIX_SCREEN_FILL,'FILL']]), 'STYLE');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_WRITEDISPLAY);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_setcursor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_SETCURSOR);
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.I2C_MATRIX_X);
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.I2C_MATRIX_Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_print'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_PRINT);
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.I2C_MATRIX_X);
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.I2C_MATRIX_Y);
    this.appendValueInput("CONTENT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_TEXT);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_settextsize'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_SETTEXTSIZE)
      .appendField(new Blockly.FieldTextInput("1"),"SIZE");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_setbrightness'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendValueInput("BRIGHTNESS")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_BRIGHTNESS)
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_drawpixel'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_DRAWPIXEL);
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_X);
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_Y);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_settextwrap'] = {
  init: function() {
    var BOOLEANS =
        [[Blockly.Msg.LOGIC_BOOLEAN_TRUE, 'TRUE'],
         [Blockly.Msg.LOGIC_BOOLEAN_FALSE, 'FALSE']];
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_SETTEXTWRAP);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(BOOLEANS), 'BOOL');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_settextcolor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_SETTEXTCOLOR);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_drawcircle'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(new Blockly.FieldDropdown(
        [[Blockly.Msg.HT1632_MATRIX_CIRCLE_DRAW, "DRAW"],
        [Blockly.Msg.HT1632_MATRIX_CIRCLE_FILL, "FILL"]]), 'STYLE');
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_X);
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_Y);
    this.appendValueInput("D")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_RADIUS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLOR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_drawrect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(new Blockly.FieldDropdown(
        [[Blockly.Msg.HT1632_MATRIX_RECT_DRAW, "DRAW"],
        [Blockly.Msg.HT1632_MATRIX_RECT_FILL, "FILL"]]), 'STYLE');
    this.appendValueInput("X0")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_X0);
    this.appendValueInput("Y0")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_Y0);
    this.appendValueInput("W")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_WIDTH);
    this.appendValueInput("H")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_HEIGHT);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_drawline'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_DRAWLINE);
    this.appendValueInput("X0")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_X0);
    this.appendValueInput("Y0")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_Y0);
    this.appendValueInput("X1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_X1);
    this.appendValueInput("Y1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.HT1632_MATRIX_Y1);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HT1632_MATRIX_LED_ON,"1"],[Blockly.Msg.HT1632_MATRIX_LED_OFF,"0"]]), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['ht1632_matrix_setrotation'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.HT1632_MATRIX_HELPURL);
    this.setColour(Blockly.Blocks.HT1632_matrix.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.HT1632_MATRIX_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.ht1632_16x24_matrix_image, 64, 64))
      .appendField(Blockly.Msg.HT1632_MATRIX_SETROTATION)
      .appendField(new Blockly.FieldTextInput("1"),"ANGLE");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Blocks.HT1632_matrix.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.HT1632_MATRIX_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};
