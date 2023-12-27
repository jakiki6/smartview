'use strict';

Object.defineProperty(exports, "__esModule", {
	"value": true
});
exports.ERROR_FACEPLATE_NOT_AVAILABLE = "The requested faceplate is not available.";
exports.ERROR_FACEPLATE_NOT_VALID = "Unable to download the SVG. The SVG may be damaged or has a wrong format.";
exports.ERROR_FACEPLATE_DOM_INSERTION = "Unable to insert the SVG into the DOM.";
exports.ERROR_FACEPLATE_SERVER_RESPONSE = "Unable to connect with the server, or the requested faceplate is not available.";
exports.ERROR_ROM_SERVER_RESPONSE = "Unable to connect with the server, or the requested ROM file is not available.";
exports.ERROR_STATEFILE_NOT_AVAILABLE = "The requested state file is not available.";
exports.ERROR_CONF_FILE_CONST = "You must provide a valid JSON object or a path to a configuration file.";
exports.ERROR_CONF_SETT_CONST = "You must specify initial configuration settings.";
exports.ERROR_SERVER_CONNECTION = "Unable to connect with the server.";
exports.ERROR_CONF_FILE_DAMAGED = "The configuration file is damaged, or is not a JSON file.";
exports.ERROR_CONF_FILE_NA = "The configuration file cannot be found.";
exports.ERROR_ROM_URL_NEEDED = "You must specify a URL for the ROM file.";
exports.ERROR_FACEPLATE_URL_NEEDED = "You must specify a URL for the faceplates.";
exports.ERROR_EXT_FOR_CONF_FILE = "The configuration file extension must be ";
exports.ERROR_EXT_FOR_ROM = "The ROM extension must be ";
exports.ERROR_EXT_FOR_FACEPLATE = "The faceplate extension must be ";
exports.ERROR_EXT_FOR_KEYMAPPING = "The key mapping file extension must be ";
exports.ERROR_KEY_MAPPING_DAMAGED = "The key mapping file is damaged or not a valid key mapping file.";
exports.WARN_KEY_HIST_BUFFER_TO_DEFAULT = "Unable to read a key history buffer length value. A value of 100 will be set.";
exports.ERROR_EMU_HIDDEN_RESIZE = "The calculator cannot be resized when it is hidden.";
exports.ERROR_EMU_HIDDEN_SWITCH_FACEPLATE = "The faceplate cannot be switched when the calculator is hidden.";
exports.ERROR_TI84P_RESIZE_VALID_VALUES = "The calculator scale must be specified by its string name representation (small, medium, large or extra large).";
exports.ERROR_EMU_RESIZE_VALID_VALUES = "The calculator scale must be specified by its string name representation (small, medium, large or extra large).";
exports.ERROR_RESIZE_CALCULATOR_LOADING = "The calculator cannot be resized while it is loading.";
exports.ERROR_TI30MV_RESIZE_VALID_VALUES = "The calculator scale must be specified by its string name representation (small, medium, large or extra large).";
exports.ERROR_TI108_RESIZE_VALID_VALUES = "The calculator scale must be specified by its string name representation (small, medium, large or extra large).";
exports.ERROR_EMU_HIDDEN_LOAD_STATE = "A calculator state file cannot be loaded when the calculator is hidden.";
exports.ERROR_EMU_HIDDEN_KEYS_ENABLED = "The keys cannot be enabled when the calculator is hidden.";
exports.ERROR_EMU_HIDDEN_KEYS_DISABLED = "The keys cannot be disabled when the calculator is hidden.";
exports.ERROR_EMU_WAS_USED = "Cannot determine if the calculator has been used.";
exports.ERROR_SERVER_CONNECTION_OR_KEY_MAPPING_NA = "Unable to connect with the server, or the requested key mapping file is not available.";
exports.ERROR_NOT_VALID_URL = "You must provide a valid URL beginning with http:// or https://";
exports.ERROR_NOT_VALID_KEY_CONFIGURATION_URL = "You must provide a non-empty JSON object or a valid URL beginning with http:// or https://";
exports.ERROR_FILE_EXT_JSON = "The key configuration file extension must be .json";
exports.ERROR_FILE_NA_IN_SERVER = "The requested file must be in the same server as the TI ExamCalc application";
exports.ERROR_INVALID_KEY_CONFIGURATION_FILE = "You must provide a valid JSON object or a path to a valid key configuration file.";
exports.ERROR_BROWSER_NOT_SUPPORTED = "This browser version may not support all TI ExamCalc functionality. It is recommended that you use a fully supported browser version. For more information visit education.ti.com";
exports.ERROR_FILE_WRITER_API_NOT_SUPPORTED = "This browser does not support the File Writer property.";
exports.ERROR_FILE_NAME_IS_REQUESTED = "You must provide a file name.";
exports.ERROR_INVALID_FILE_NAME = "Invalid filename. Valid characters are alpha-numeric, underscore, dash, dot and space.";
exports.ERROR_INVALID_SVG_FORMAT = "Invalid SVG. The SVG must be a non empty string.";
exports.ERROR_FAIL_TO_DESTROY_INSTANCE = "Unable to destroy the XXX ExamCalc instance.";
exports.ERROR_NO_AVAILABLE_ANGLE = "The specified angle mode XXX is not supported.";
exports.ERROR_EMPTY_ANGLE = "The angle mode has not been specified. XXX will be set as the default mode.";
exports.ERROR_EMPTY_DISPLAY_MODE = "The display mode has not been specified. XXX will be set as the default mode.";
exports.ERROR_NO_AVAILABLE_DISPLAY_MODE = "The specified display mode XXX is not supported.";
exports.ERROR_CALCULATOR_DIV = "The div with ID XXX does not exist in the DOM.";
exports.ERROR_DESTROYED_EMULATOR = "The emulator has been destroyed.";
