function setCall_Cookie(name, value, props) {props = props || {};var exp = props.expires; if (typeof exp == "number" && exp) {var d = new Date(); d.setTime(d.getTime() + exp * 1000);exp = props.expires = d; } if (exp && exp.toUTCString) { props.expires = exp.toUTCString(); } value = encodeURIComponent(value); var updatedCookie = name + "=" + value; for (var propName in props) { updatedCookie += "; " + propName; var propValue = props[propName]; if (propValue !== true) { updatedCookie += "=" + propValue; } } updatedCookie += "; path=/"; document.cookie = updatedCookie;}
            var call_value  = '0';
         




