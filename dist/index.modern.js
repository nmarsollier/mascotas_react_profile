import { environment, useErrorHandler, GlobalContent, FormTitle, Form, FormInput, ImageUpload, ErrorLabel, DangerLabel, FormButtonBar, FormAcceptButton, FormButton, goHome } from 'mascotas_react_common';
import React, { useState, useEffect } from 'react';
import { securedAxios } from 'mascotas_react_store';
import { getProvinces } from 'mascotas_react_provinces';

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
      return Promise.resolve(securedAxios().get(environment.backendUrl + "/v1/profile")).then(function (res) {
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
      return Promise.resolve(securedAxios().post(environment.backendUrl + "/v1/profile/picture", payload)).then(function (res) {
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
      return Promise.resolve(securedAxios().post(environment.backendUrl + "/v1/profile", data)).then(function (res) {
        return Promise.resolve(res.data);
      });
    }, function (err) {
      return Promise.reject(err);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
function getPictureUrl(id) {
  if (id && id.length > 0) {
    return environment.backendUrl + "/v1/image/" + id;
  } else {
    return "/assets/profile.png";
  }
}

function Profile(props) {
  var _useState = useState(""),
      address = _useState[0],
      setAddress = _useState[1];

  var _useState2 = useState(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = useState(""),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = useState(""),
      phone = _useState4[0],
      setPhone = _useState4[1];

  var _useState5 = useState(""),
      picture = _useState5[0],
      setPicture = _useState5[1];

  var _useState6 = useState(""),
      province = _useState6[0],
      setProvince = _useState6[1];

  var _useState7 = useState(new Array()),
      provinces = _useState7[0],
      setProvinces = _useState7[1];

  var errorHandler = useErrorHandler();

  var loadProvinces = function loadProvinces() {
    try {
      var _temp2 = _catch(function () {
        return Promise.resolve(getProvinces()).then(function (result) {
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
          goHome(props);
        });
      }, function (error) {
        errorHandler.processRestValidations(error);
      });

      return Promise.resolve(_temp8 && _temp8.then ? _temp8.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  useEffect(function () {
    loadProvinces();
    loadProfile();
  }, []);
  return /*#__PURE__*/React.createElement(GlobalContent, null, /*#__PURE__*/React.createElement(FormTitle, null, "Actualizar Perfil"), /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(FormInput, {
    label: "Nombre",
    name: "name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Profile Picture"), /*#__PURE__*/React.createElement(ImageUpload, {
    src: getPictureUrl(picture),
    onChange: uploadPicture
  }), /*#__PURE__*/React.createElement(ErrorLabel, {
    message: errorHandler.getErrorText("name")
  })), /*#__PURE__*/React.createElement(FormInput, {
    label: "Email",
    name: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Provincia"), /*#__PURE__*/React.createElement("select", {
    value: province,
    onChange: function onChange(e) {
      return setProvince(e.target.value);
    },
    className: errorHandler.getErrorClass("email", "form-control")
  }, provinces.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.id
    }, p.name);
  })), /*#__PURE__*/React.createElement(ErrorLabel, {
    message: errorHandler.getErrorText("province")
  })), /*#__PURE__*/React.createElement(FormInput, {
    label: "Direcci\xF3n",
    name: "address",
    value: address,
    onChange: function onChange(e) {
      return setAddress(e.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React.createElement(FormInput, {
    label: "Tel\xE9fono",
    name: "phone",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    errorHandler: errorHandler
  }), /*#__PURE__*/React.createElement(DangerLabel, {
    message: errorHandler.errorMessage
  }), /*#__PURE__*/React.createElement(FormButtonBar, null, /*#__PURE__*/React.createElement(FormAcceptButton, {
    label: "Actualizar",
    onClick: updateClick
  }), /*#__PURE__*/React.createElement(FormButton, {
    label: "Cancelar",
    onClick: function onClick() {
      return goHome(props);
    }
  }))));
}

export { Profile };
//# sourceMappingURL=index.modern.js.map
