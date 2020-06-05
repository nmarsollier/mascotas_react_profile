function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var mascotas_react_common = require('mascotas_react_common');
var React = require('react');
var React__default = _interopDefault(React);
var axios = _interopDefault(require('axios'));
var mascotas_react_provinces = require('mascotas_react_provinces');

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var getCurrentProfile = function getCurrentProfile() {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(axios.get(mascotas_react_common.environment.backendUrl + "/v1/profile")).then(function (res) {
        return Promise.resolve(res.data);
      });
    }, function (err) {
      return Promise.reject(err);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
var updateProfilePicture = function updateProfilePicture(payload) {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(axios.post(mascotas_react_common.environment.backendUrl + "/v1/profile/picture", payload)).then(function (res) {
        return Promise.resolve(res.data);
      });
    }, function (err) {
      return Promise.reject(err);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
var updateBasicInfo = function updateBasicInfo(data) {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(axios.post(mascotas_react_common.environment.backendUrl + "/v1/profile", data)).then(function (res) {
        return Promise.resolve(res.data);
      });
    }, function (err) {
      return Promise.reject(err);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
axios.defaults.headers.common["Content-Type"] = "application/json";
function getPictureUrl(id) {
  if (id && id.length > 0) {
    return mascotas_react_common.environment.backendUrl + "/v1/image/" + id;
  } else {
    return "/assets/profile.png";
  }
}

function Profile(props) {
  var _useState = React.useState(""),
      address = _useState[0],
      setAddress = _useState[1];

  var _useState2 = React.useState(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = React.useState(""),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = React.useState(""),
      phone = _useState4[0],
      setPhone = _useState4[1];

  var _useState5 = React.useState(""),
      picture = _useState5[0],
      setPicture = _useState5[1];

  var _useState6 = React.useState(""),
      province = _useState6[0],
      setProvince = _useState6[1];

  var _useState7 = React.useState(new Array()),
      provinces = _useState7[0],
      setProvinces = _useState7[1];

  var errorHandler = mascotas_react_common.useErrorHandler();

  var loadProvinces = function loadProvinces() {
    try {
      var _temp2 = _catch(function () {
        return Promise.resolve(mascotas_react_provinces.getProvinces()).then(function (result) {
          setProvinces(result);
        });
      }, function (error) {
        errorHandler.processRestValidations(error);
      });

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var loadProfile = function loadProfile() {
    try {
      var _temp4 = _catch(function () {
        return Promise.resolve(getCurrentProfile()).then(function (result) {
          setAddress(result.address);
          setEmail(result.email);
          setName(result.name);
          setPhone(result.phone);
          setPicture(result.picture);
          setProvince(result.province);
        });
      }, function (error) {
        errorHandler.processRestValidations(error);
      });

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var uploadPicture = function uploadPicture(image) {
    try {
      var _temp6 = _catch(function () {
        return Promise.resolve(updateProfilePicture({
          image: image
        })).then(function (result) {
          setPicture(result.id);
        });
      }, function (error) {
        errorHandler.processRestValidations(error);
      });

      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var updateClick = function updateClick() {
    try {
      errorHandler.cleanRestValidations();

      if (!name) {
        errorHandler.addError("name", "No puede estar vacío");
      }

      if (!email) {
        errorHandler.addError("email", "No puede estar vacío");
      }

      if (errorHandler.hasErrors()) {
        return Promise.resolve();
      }

      var _temp8 = _catch(function () {
        return Promise.resolve(updateBasicInfo({
          address: address,
          email: email,
          name: name,
          phone: phone,
          province: province
        })).then(function () {
          mascotas_react_common.goHome(props);
        });
      }, function (error) {
        errorHandler.processRestValidations(error);
      });

      return Promise.resolve(_temp8 && _temp8.then ? _temp8.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  React.useEffect(function () {
    loadProvinces();
    loadProfile();
  }, []);
  return /*#__PURE__*/React__default.createElement(mascotas_react_common.GlobalContent, null, /*#__PURE__*/React__default.createElement(mascotas_react_common.FormTitle, null, "Actualizar Perfil"), /*#__PURE__*/React__default.createElement(mascotas_react_common.Form, null, /*#__PURE__*/React__default.createElement(mascotas_react_common.FormInput, {
    label: "Nombre",
    name: "name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React__default.createElement("label", null, "Profile Picture"), /*#__PURE__*/React__default.createElement(mascotas_react_common.ImageUpload, {
    src: getPictureUrl(picture),
    onChange: uploadPicture
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.ErrorLabel, {
    message: errorHandler.getErrorText("name")
  })), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormInput, {
    label: "Email",
    name: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React__default.createElement("label", null, "Provincia"), /*#__PURE__*/React__default.createElement("select", {
    value: province,
    onChange: function onChange(e) {
      return setProvince(e.target.value);
    },
    className: errorHandler.getErrorClass("email", "form-control")
  }, provinces.map(function (p) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: p.id,
      value: p.id
    }, p.name);
  })), /*#__PURE__*/React__default.createElement(mascotas_react_common.ErrorLabel, {
    message: errorHandler.getErrorText("province")
  })), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormInput, {
    label: "Direcci\xF3n",
    name: "address",
    value: address,
    onChange: function onChange(e) {
      return setAddress(e.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormInput, {
    label: "Tel\xE9fono",
    name: "phone",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.DangerLabel, {
    message: errorHandler.errorMessage
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormButtonBar, null, /*#__PURE__*/React__default.createElement(mascotas_react_common.FormAcceptButton, {
    label: "Actualizar",
    onClick: updateClick
  }), /*#__PURE__*/React__default.createElement(mascotas_react_common.FormButton, {
    label: "Cancelar",
    onClick: function onClick() {
      return mascotas_react_common.goHome(props);
    }
  }))));
}

exports.Profile = Profile;
//# sourceMappingURL=index.js.map
