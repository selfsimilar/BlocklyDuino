'use strict';

goog.provide('Blockly.Blocks.sparki');

goog.require('Blockly.Blocks');


Blockly.Blocks['sparki_move_forward'] = {
	/**
	* Block for moving sparki forward
	*/
  init: function() {
    this.appendValueInput("forwardDist")
        .setCheck("Number")
        .appendField("Move Forward");
    this.appendDummyInput()
        .appendField("(cm)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(Blockly.Msg.SPARKI_MOVE_TOOLTIP);
  }
};

Blockly.Blocks['sparki_move_backward'] = {
	/**
	* Block for moving sparki backward
	*/
  init: function() {
    this.appendValueInput("backwardDist")
        .setCheck("Number")
        .appendField("move Backward");
    this.appendDummyInput()
        .appendField("(cm)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(Blockly.Msg.SPARKI_MOVE_TOOLTIP);
  }
};

Blockly.Blocks['sparki_move_left'] = {
	/**
	* Block for moving sparki left
	*/
  init: function() {
    this.appendValueInput("leftAngle")
        .setCheck("Number")
        .appendField("Move Left");
    this.appendDummyInput()
        .appendField("(degrees)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(Blockly.Msg.SPARKI_MOVE_TOOLTIP);
  }
};

Blockly.Blocks['sparki_move_right'] = {
	/**
	* Block for moving sparki right
	*/
  init: function() {
    this.appendValueInput("rightAngle")
        .setCheck("Number")
        .appendField("Move Right");
    this.appendDummyInput()
        .appendField("(degrees)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(Blockly.Msg.SPARKI_MOVE_TOOLTIP);
  }
};

Blockly.Blocks['sparki_opengripper'] = {
	/**
	* Block for opening sparki gripper
	*/
  init: function() {
    this.appendValueInput("openGripperDist")
        .setCheck("Number")
        .appendField("Open Gripper");
    this.appendDummyInput()
        .appendField("(cm)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(Blockly.Msg.SPARKI_OPENGRIPPER_TOOLTIP);
  }
};

Blockly.Blocks['sparki_closegripper'] = {
	/**
	* Block for closing sparki gripper
	*/
  init: function() {
    this.appendValueInput("closeGripperDist")
        .setCheck("Number")
        .appendField("Close Gripper");
    this.appendDummyInput()
        .appendField("(cm)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(Blockly.Msg.SPARKI_CLOSEGRIPPER_TOOLTIP);
  }
};

Blockly.Blocks['sparki_stop_movement'] = {
	/**
	* Block for stopping sparki
	*/
  init: function() {
    this.appendDummyInput()
        .appendField("Stop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(Blockly.Msg.SPARKI_STOP_TOOLTIP);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sparki_stopgripper'] = {
	/**
	* Block for stopping sparki gripper
	*/
  init: function() {
    this.appendDummyInput()
        .appendField("Stop Gripper");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(Blockly.Msg.SPARKI_STOPGRIPPER_TOOLTIP);
  }
};

Blockly.Blocks['sparki_bark'] = {
	/**
	* Block for making sparki bark/beep
	*/
  init: function() {
    this.appendDummyInput()
        .appendField("Sparki Bark");
    this.appendValueInput("frequency")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("frequency");
    this.appendValueInput("Time")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("milliseconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip(Blockly.Msg.SPARKI_BARK_TOOLTIP);
  }
};

Blockly.Blocks['sparki_ultrasonicdistance'] = {
	/**
	* Block for sparki to sense how far away is closest physical object 	*(returns a number)
	*/
  init: function() {
    this.appendDummyInput()
        .appendField("Distance Sensor");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip(Blockly.Msg.SPARKI_ULTRASONIC_TOOLTIP);
  }
};

Blockly.Blocks['sparki_leftlight'] = {
	/**
	* Block for sparki to sense light coming from left (returns a number)
	*/
  init: function() {
    this.appendDummyInput()
        .appendField("Left Light Sensor");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip(Blockly.Msg.SPARKI_LEFT_TOOLTIP );
  }
};

Blockly.Blocks['sparki_rightlight'] = {
	/**
	* Block for sparki to sense light coming from right (returns a number)
	*/
  init: function() {
    this.appendDummyInput()
        .appendField("Right Light Sensor");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip(Blockly.Msg.SPARKI_RIGHTLIGHT_TOOLTIP);
  }
};

Blockly.Blocks['sparki_centerlight'] = {
	/**
	* Block for sparki to sense light coming from forward direction
	*(returns a number)
	*/
  init: function() {
    this.appendDummyInput()
        .appendField("Center Light Sensor");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip(Blockly.Msg.SPARKI_CENTER_TOOLTIP);
  }
};

Blockly.Blocks['include_sparki_library'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Include Sparki Library");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};
