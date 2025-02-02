//Webrtc adapter module from https://github.com/webrtcHacks/adapter
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? globalF
      : "undefined" != typeof self
      ? self
      : this
    ).adapter = e();
  }
})(function () {
  return (function () {
    function e(t, r, n) {
      function i(a, s) {
        if (!r[a]) {
          if (!t[a]) {
            var c = "function" == typeof require && require;
            if (!s && c) return c(a, !0);
            if (o) return o(a, !0);
            var p = Error("Cannot find module '" + a + "'");
            throw ((p.code = "MODULE_NOT_FOUND"), p);
          }
          var d = (r[a] = { exports: {} });
          t[a][0].call(
            d.exports,
            function (e) {
              return i(t[a][1][e] || e);
            },
            d,
            d.exports,
            e,
            t,
            r,
            n
          );
        }
        return r[a].exports;
      }
      for (
        var o = "function" == typeof require && require, a = 0;
        a < n.length;
        a++
      )
        i(n[a]);
      return i;
    }
    return e;
  })()(
    {
      1: [
        function (e, t, r) {
          "use strict";
          var n = (0, e("./adapter_factory.js").adapterFactory)({
            window: "undefined" == typeof window ? void 0 : window,
          });
          t.exports = n;
        },
        { "./adapter_factory.js": 2 },
      ],
      2: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.adapterFactory = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.window,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { shimChrome: !0, shimFirefox: !0, shimSafari: !0 },
                n = i.log,
                o = i.detectBrowser(t),
                s = {
                  browserDetails: o,
                  commonShim: f,
                  extractVersion: i.extractVersion,
                  disableLog: i.disableLog,
                  disableWarnings: i.disableWarnings,
                  sdp: l,
                };
              switch (o.browser) {
                case "chrome":
                  if (!a || !a.shimPeerConnection || !r.shimChrome) {
                    n("Chrome shim is not included in this adapter release.");
                    break;
                  }
                  if (null === o.version) {
                    n("Chrome shim can not determine version, not shimming.");
                    break;
                  }
                  n("adapter.js shimming chrome."),
                    (s.browserShim = a),
                    f.shimAddIceCandidateNullOrEmpty(t, o),
                    f.shimParameterlessSetLocalDescription(t, o),
                    a.shimGetUserMedia(t, o),
                    a.shimMediaStream(t, o),
                    a.shimPeerConnection(t, o),
                    a.shimOnTrack(t, o),
                    a.shimAddTrackRemoveTrack(t, o),
                    a.shimGetSendersWithDtmf(t, o),
                    a.shimGetStats(t, o),
                    a.shimSenderReceiverGetStats(t, o),
                    a.fixNegotiationNeeded(t, o),
                    f.shimRTCIceCandidate(t, o),
                    f.shimConnectionState(t, o),
                    f.shimMaxMessageSize(t, o),
                    f.shimSendThrowTypeError(t, o),
                    f.removeExtmapAllowMixed(t, o);
                  break;
                case "firefox":
                  if (!c || !c.shimPeerConnection || !r.shimFirefox) {
                    n("Firefox shim is not included in this adapter release.");
                    break;
                  }
                  n("adapter.js shimming firefox."),
                    (s.browserShim = c),
                    f.shimAddIceCandidateNullOrEmpty(t, o),
                    f.shimParameterlessSetLocalDescription(t, o),
                    c.shimGetUserMedia(t, o),
                    c.shimPeerConnection(t, o),
                    c.shimOnTrack(t, o),
                    c.shimRemoveStream(t, o),
                    c.shimSenderGetStats(t, o),
                    c.shimReceiverGetStats(t, o),
                    c.shimRTCDataChannel(t, o),
                    c.shimAddTransceiver(t, o),
                    c.shimGetParameters(t, o),
                    c.shimCreateOffer(t, o),
                    c.shimCreateAnswer(t, o),
                    f.shimRTCIceCandidate(t, o),
                    f.shimConnectionState(t, o),
                    f.shimMaxMessageSize(t, o),
                    f.shimSendThrowTypeError(t, o);
                  break;
                case "safari":
                  if (!d || !r.shimSafari) {
                    n("Safari shim is not included in this adapter release.");
                    break;
                  }
                  n("adapter.js shimming safari."),
                    (s.browserShim = d),
                    f.shimAddIceCandidateNullOrEmpty(t, o),
                    f.shimParameterlessSetLocalDescription(t, o),
                    d.shimRTCIceServerUrls(t, o),
                    d.shimCreateOfferLegacy(t, o),
                    d.shimCallbacksAPI(t, o),
                    d.shimLocalStreamsAPI(t, o),
                    d.shimRemoteStreamsAPI(t, o),
                    d.shimTrackEventTransceiver(t, o),
                    d.shimGetUserMedia(t, o),
                    d.shimAudioContext(t, o),
                    f.shimRTCIceCandidate(t, o),
                    f.shimMaxMessageSize(t, o),
                    f.shimSendThrowTypeError(t, o),
                    f.removeExtmapAllowMixed(t, o);
                  break;
                default:
                  n("Unsupported browser!");
              }
              return s;
            });
          var n = e("./utils"),
            i = h(n),
            o = e("./chrome/chrome_shim"),
            a = h(o),
            s = e("./firefox/firefox_shim"),
            c = h(s),
            p = e("./safari/safari_shim"),
            d = h(p),
            u = e("./common_shim"),
            f = h(u),
            m = e("sdp"),
            l = h(m);
          function h(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          }
        },
        {
          "./chrome/chrome_shim": 3,
          "./common_shim": 6,
          "./firefox/firefox_shim": 7,
          "./safari/safari_shim": 10,
          "./utils": 11,
          sdp: 12,
        },
      ],
      3: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.shimGetDisplayMedia = r.shimGetUserMedia = void 0);
          var n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            i = e("./getusermedia");
          Object.defineProperty(r, "shimGetUserMedia", {
            enumerable: !0,
            get: function () {
              return i.shimGetUserMedia;
            },
          });
          var o = e("./getdisplaymedia");
          Object.defineProperty(r, "shimGetDisplayMedia", {
            enumerable: !0,
            get: function () {
              return o.shimGetDisplayMedia;
            },
          }),
            (r.shimMediaStream = function (e) {
              e.MediaStream = e.MediaStream || e.webkitMediaStream;
            }),
            (r.shimOnTrack = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) !== "object" ||
                !e.RTCPeerConnection ||
                "ontrack" in e.RTCPeerConnection.prototype
              )
                s.wrapPeerConnectionEvent(e, "track", function (e) {
                  return (
                    e.transceiver ||
                      Object.defineProperty(e, "transceiver", {
                        value: { receiver: e.receiver },
                      }),
                    e
                  );
                });
              else {
                Object.defineProperty(
                  e.RTCPeerConnection.prototype,
                  "ontrack",
                  {
                    get: function () {
                      return this._ontrack;
                    },
                    set: function (e) {
                      this._ontrack &&
                        this.removeEventListener("track", this._ontrack),
                        this.addEventListener("track", (this._ontrack = e));
                    },
                    enumerable: !0,
                    configurable: !0,
                  }
                );
                var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription =
                  function () {
                    var r = this;
                    return (
                      this._ontrackpoly ||
                        ((this._ontrackpoly = function (t) {
                          t.stream.addEventListener("addtrack", function (n) {
                            var i = void 0;
                            i = e.RTCPeerConnection.prototype.getReceivers
                              ? r.getReceivers().find(function (e) {
                                  return e.track && e.track.id === n.track.id;
                                })
                              : { track: n.track };
                            var o = new Event("track");
                            (o.track = n.track),
                              (o.receiver = i),
                              (o.transceiver = { receiver: i }),
                              (o.streams = [t.stream]),
                              r.dispatchEvent(o);
                          }),
                            t.stream.getTracks().forEach(function (n) {
                              var i = void 0;
                              i = e.RTCPeerConnection.prototype.getReceivers
                                ? r.getReceivers().find(function (e) {
                                    return e.track && e.track.id === n.id;
                                  })
                                : { track: n };
                              var o = new Event("track");
                              (o.track = n),
                                (o.receiver = i),
                                (o.transceiver = { receiver: i }),
                                (o.streams = [t.stream]),
                                r.dispatchEvent(o);
                            });
                        }),
                        this.addEventListener("addstream", this._ontrackpoly)),
                      t.apply(this, arguments)
                    );
                  };
              }
            }),
            (r.shimGetSendersWithDtmf = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCPeerConnection &&
                !("getSenders" in e.RTCPeerConnection.prototype) &&
                "createDTMFSender" in e.RTCPeerConnection.prototype
              ) {
                var t = function (e, t) {
                  return {
                    track: t,
                    get dtmf() {
                      return (
                        void 0 === this._dtmf &&
                          ("audio" === t.kind
                            ? (this._dtmf = e.createDTMFSender(t))
                            : (this._dtmf = null)),
                        this._dtmf
                      );
                    },
                    _pc: e,
                  };
                };
                if (!e.RTCPeerConnection.prototype.getSenders) {
                  e.RTCPeerConnection.prototype.getSenders = function () {
                    return (
                      (this._senders = this._senders || []),
                      this._senders.slice()
                    );
                  };
                  var r = e.RTCPeerConnection.prototype.addTrack;
                  e.RTCPeerConnection.prototype.addTrack = function (e, n) {
                    var i = r.apply(this, arguments);
                    return i || ((i = t(this, e)), this._senders.push(i)), i;
                  };
                  var i = e.RTCPeerConnection.prototype.removeTrack;
                  e.RTCPeerConnection.prototype.removeTrack = function (e) {
                    i.apply(this, arguments);
                    var t = this._senders.indexOf(e);
                    -1 !== t && this._senders.splice(t, 1);
                  };
                }
                var o = e.RTCPeerConnection.prototype.addStream;
                e.RTCPeerConnection.prototype.addStream = function (e) {
                  var r = this;
                  (this._senders = this._senders || []),
                    o.apply(this, [e]),
                    e.getTracks().forEach(function (e) {
                      r._senders.push(t(r, e));
                    });
                };
                var a = e.RTCPeerConnection.prototype.removeStream;
                e.RTCPeerConnection.prototype.removeStream = function (e) {
                  var t = this;
                  (this._senders = this._senders || []),
                    a.apply(this, [e]),
                    e.getTracks().forEach(function (e) {
                      var r = t._senders.find(function (t) {
                        return t.track === e;
                      });
                      r && t._senders.splice(t._senders.indexOf(r), 1);
                    });
                };
              } else if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCPeerConnection &&
                "getSenders" in e.RTCPeerConnection.prototype &&
                "createDTMFSender" in e.RTCPeerConnection.prototype &&
                e.RTCRtpSender &&
                !("dtmf" in e.RTCRtpSender.prototype)
              ) {
                var s = e.RTCPeerConnection.prototype.getSenders;
                (e.RTCPeerConnection.prototype.getSenders = function () {
                  var e = this,
                    t = s.apply(this, []);
                  return (
                    t.forEach(function (t) {
                      return (t._pc = e);
                    }),
                    t
                  );
                }),
                  Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                    get: function () {
                      return (
                        void 0 === this._dtmf &&
                          ("audio" === this.track.kind
                            ? (this._dtmf = this._pc.createDTMFSender(
                                this.track
                              ))
                            : (this._dtmf = null)),
                        this._dtmf
                      );
                    },
                  });
              }
            }),
            (r.shimGetStats = function (e) {
              if (e.RTCPeerConnection) {
                var t = e.RTCPeerConnection.prototype.getStats;
                e.RTCPeerConnection.prototype.getStats = function () {
                  var e = this,
                    r = Array.prototype.slice.call(arguments),
                    n = r[0],
                    i = r[1],
                    o = r[2];
                  if (arguments.length > 0 && "function" == typeof n)
                    return t.apply(this, arguments);
                  if (
                    0 === t.length &&
                    (0 === arguments.length || "function" != typeof n)
                  )
                    return t.apply(this, []);
                  var a = function (e) {
                      var t = {};
                      return (
                        e.result().forEach(function (e) {
                          var r = {
                            id: e.id,
                            timestamp: e.timestamp,
                            type:
                              {
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate",
                              }[e.type] || e.type,
                          };
                          e.names().forEach(function (t) {
                            r[t] = e.stat(t);
                          }),
                            (t[r.id] = r);
                        }),
                        t
                      );
                    },
                    s = function (e) {
                      return new Map(
                        Object.keys(e).map(function (t) {
                          return [t, e[t]];
                        })
                      );
                    };
                  if (arguments.length >= 2) {
                    var c = function (e) {
                      i(s(a(e)));
                    };
                    return t.apply(this, [c, n]);
                  }
                  return new Promise(function (r, n) {
                    t.apply(e, [
                      function (e) {
                        r(s(a(e)));
                      },
                      n,
                    ]);
                  }).then(i, o);
                };
              }
            }),
            (r.shimSenderReceiverGetStats = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCPeerConnection &&
                e.RTCRtpSender &&
                e.RTCRtpReceiver
              ) {
                if (!("getStats" in e.RTCRtpSender.prototype)) {
                  var t = e.RTCPeerConnection.prototype.getSenders;
                  t &&
                    (e.RTCPeerConnection.prototype.getSenders = function () {
                      var e = this,
                        r = t.apply(this, []);
                      return (
                        r.forEach(function (t) {
                          return (t._pc = e);
                        }),
                        r
                      );
                    });
                  var r = e.RTCPeerConnection.prototype.addTrack;
                  r &&
                    (e.RTCPeerConnection.prototype.addTrack = function () {
                      var e = r.apply(this, arguments);
                      return (e._pc = this), e;
                    }),
                    (e.RTCRtpSender.prototype.getStats = function () {
                      var e = this;
                      return this._pc.getStats().then(function (t) {
                        return s.filterStats(t, e.track, !0);
                      });
                    });
                }
                if (!("getStats" in e.RTCRtpReceiver.prototype)) {
                  var i = e.RTCPeerConnection.prototype.getReceivers;
                  i &&
                    (e.RTCPeerConnection.prototype.getReceivers = function () {
                      var e = this,
                        t = i.apply(this, []);
                      return (
                        t.forEach(function (t) {
                          return (t._pc = e);
                        }),
                        t
                      );
                    }),
                    s.wrapPeerConnectionEvent(e, "track", function (e) {
                      return (e.receiver._pc = e.srcElement), e;
                    }),
                    (e.RTCRtpReceiver.prototype.getStats = function () {
                      var e = this;
                      return this._pc.getStats().then(function (t) {
                        return s.filterStats(t, e.track, !1);
                      });
                    });
                }
                if (
                  "getStats" in e.RTCRtpSender.prototype &&
                  "getStats" in e.RTCRtpReceiver.prototype
                ) {
                  var o = e.RTCPeerConnection.prototype.getStats;
                  e.RTCPeerConnection.prototype.getStats = function () {
                    if (
                      arguments.length > 0 &&
                      arguments[0] instanceof e.MediaStreamTrack
                    ) {
                      var t = arguments[0],
                        r = void 0,
                        n = void 0,
                        i = void 0;
                      return (this.getSenders().forEach(function (e) {
                        e.track === t && (r ? (i = !0) : (r = e));
                      }),
                      this.getReceivers().forEach(function (e) {
                        return (
                          e.track === t && (n ? (i = !0) : (n = e)),
                          e.track === t
                        );
                      }),
                      i || (r && n))
                        ? Promise.reject(
                            new DOMException(
                              "There are more than one sender or receiver for the track.",
                              "InvalidAccessError"
                            )
                          )
                        : r
                        ? r.getStats()
                        : n
                        ? n.getStats()
                        : Promise.reject(
                            new DOMException(
                              "There is no sender or receiver for the track.",
                              "InvalidAccessError"
                            )
                          );
                    }
                    return o.apply(this, arguments);
                  };
                }
              }
            }),
            (r.shimAddTrackRemoveTrackWithNative = p),
            (r.shimAddTrackRemoveTrack = function (e, t) {
              if (e.RTCPeerConnection) {
                if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65)
                  return p(e);
                var r = e.RTCPeerConnection.prototype.getLocalStreams;
                e.RTCPeerConnection.prototype.getLocalStreams = function () {
                  var e = this,
                    t = r.apply(this);
                  return (
                    (this._reverseStreams = this._reverseStreams || {}),
                    t.map(function (t) {
                      return e._reverseStreams[t.id];
                    })
                  );
                };
                var n = e.RTCPeerConnection.prototype.addStream;
                e.RTCPeerConnection.prototype.addStream = function (t) {
                  var r = this;
                  if (
                    ((this._streams = this._streams || {}),
                    (this._reverseStreams = this._reverseStreams || {}),
                    t.getTracks().forEach(function (e) {
                      if (
                        r.getSenders().find(function (t) {
                          return t.track === e;
                        })
                      )
                        throw new DOMException(
                          "Track already exists.",
                          "InvalidAccessError"
                        );
                    }),
                    !this._reverseStreams[t.id])
                  ) {
                    var i = new e.MediaStream(t.getTracks());
                    (this._streams[t.id] = i),
                      (this._reverseStreams[i.id] = t),
                      (t = i);
                  }
                  n.apply(this, [t]);
                };
                var i = e.RTCPeerConnection.prototype.removeStream;
                (e.RTCPeerConnection.prototype.removeStream = function (e) {
                  (this._streams = this._streams || {}),
                    (this._reverseStreams = this._reverseStreams || {}),
                    i.apply(this, [this._streams[e.id] || e]),
                    delete this._reverseStreams[
                      this._streams[e.id] ? this._streams[e.id].id : e.id
                    ],
                    delete this._streams[e.id];
                }),
                  (e.RTCPeerConnection.prototype.addTrack = function (t, r) {
                    var n = this;
                    if ("closed" === this.signalingState)
                      throw new DOMException(
                        "The RTCPeerConnection's signalingState is 'closed'.",
                        "InvalidStateError"
                      );
                    var i = [].slice.call(arguments, 1);
                    if (
                      1 !== i.length ||
                      !i[0].getTracks().find(function (e) {
                        return e === t;
                      })
                    )
                      throw new DOMException(
                        "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
                        "NotSupportedError"
                      );
                    if (
                      this.getSenders().find(function (e) {
                        return e.track === t;
                      })
                    )
                      throw new DOMException(
                        "Track already exists.",
                        "InvalidAccessError"
                      );
                    (this._streams = this._streams || {}),
                      (this._reverseStreams = this._reverseStreams || {});
                    var o = this._streams[r.id];
                    if (o)
                      o.addTrack(t),
                        Promise.resolve().then(function () {
                          n.dispatchEvent(new Event("negotiationneeded"));
                        });
                    else {
                      var a = new e.MediaStream([t]);
                      (this._streams[r.id] = a),
                        (this._reverseStreams[a.id] = r),
                        this.addStream(a);
                    }
                    return this.getSenders().find(function (e) {
                      return e.track === t;
                    });
                  }),
                  ["createOffer", "createAnswer"].forEach(function (t) {
                    var r = e.RTCPeerConnection.prototype[t],
                      n = c({}, t, function () {
                        var e = this,
                          t = arguments,
                          n =
                            arguments.length &&
                            "function" == typeof arguments[0];
                        return n
                          ? r.apply(this, [
                              function (r) {
                                var n = s(e, r);
                                t[0].apply(null, [n]);
                              },
                              function (e) {
                                t[1] && t[1].apply(null, e);
                              },
                              arguments[2],
                            ])
                          : r.apply(this, arguments).then(function (t) {
                              return s(e, t);
                            });
                      });
                    e.RTCPeerConnection.prototype[t] = n[t];
                  });
                var o = e.RTCPeerConnection.prototype.setLocalDescription;
                e.RTCPeerConnection.prototype.setLocalDescription =
                  function () {
                    var e, t, r;
                    return arguments.length && arguments[0].type
                      ? ((arguments[0] =
                          ((e = this),
                          (t = arguments[0]),
                          (r = t.sdp),
                          Object.keys(e._reverseStreams || []).forEach(
                            function (t) {
                              var n = e._reverseStreams[t],
                                i = e._streams[n.id];
                              r = r.replace(RegExp(n.id, "g"), i.id);
                            }
                          ),
                          new RTCSessionDescription({ type: t.type, sdp: r }))),
                        o.apply(this, arguments))
                      : o.apply(this, arguments);
                  };
                var a = Object.getOwnPropertyDescriptor(
                  e.RTCPeerConnection.prototype,
                  "localDescription"
                );
                Object.defineProperty(
                  e.RTCPeerConnection.prototype,
                  "localDescription",
                  {
                    get: function () {
                      var e = a.get.apply(this);
                      return "" === e.type ? e : s(this, e);
                    },
                  }
                ),
                  (e.RTCPeerConnection.prototype.removeTrack = function (e) {
                    var t = this;
                    if ("closed" === this.signalingState)
                      throw new DOMException(
                        "The RTCPeerConnection's signalingState is 'closed'.",
                        "InvalidStateError"
                      );
                    if (!e._pc)
                      throw new DOMException(
                        "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
                        "TypeError"
                      );
                    if (e._pc !== this)
                      throw new DOMException(
                        "Sender was not created by this connection.",
                        "InvalidAccessError"
                      );
                    this._streams = this._streams || {};
                    var r = void 0;
                    Object.keys(this._streams).forEach(function (n) {
                      t._streams[n].getTracks().find(function (t) {
                        return e.track === t;
                      }) && (r = t._streams[n]);
                    }),
                      r &&
                        (1 === r.getTracks().length
                          ? this.removeStream(this._reverseStreams[r.id])
                          : r.removeTrack(e.track),
                        this.dispatchEvent(new Event("negotiationneeded")));
                  });
              }
              function s(e, t) {
                var r = t.sdp;
                return (
                  Object.keys(e._reverseStreams || []).forEach(function (t) {
                    var n = e._reverseStreams[t],
                      i = e._streams[n.id];
                    r = r.replace(RegExp(i.id, "g"), n.id);
                  }),
                  new RTCSessionDescription({ type: t.type, sdp: r })
                );
              }
            }),
            (r.shimPeerConnection = function (e, t) {
              !e.RTCPeerConnection &&
                e.webkitRTCPeerConnection &&
                (e.RTCPeerConnection = e.webkitRTCPeerConnection),
                e.RTCPeerConnection &&
                  t.version < 53 &&
                  [
                    "setLocalDescription",
                    "setRemoteDescription",
                    "addIceCandidate",
                  ].forEach(function (t) {
                    var r = e.RTCPeerConnection.prototype[t],
                      n = c({}, t, function () {
                        return (
                          (arguments[0] = new (
                            "addIceCandidate" === t
                              ? e.RTCIceCandidate
                              : e.RTCSessionDescription
                          )(arguments[0])),
                          r.apply(this, arguments)
                        );
                      });
                    e.RTCPeerConnection.prototype[t] = n[t];
                  });
            }),
            (r.fixNegotiationNeeded = function (e, t) {
              s.wrapPeerConnectionEvent(e, "negotiationneeded", function (e) {
                var r = e.target;
                if (
                  (!(t.version < 72) &&
                    (!r.getConfiguration ||
                      "plan-b" !== r.getConfiguration().sdpSemantics)) ||
                  "stable" === r.signalingState
                )
                  return e;
              });
            });
          var a,
            s = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("../utils.js"));
          function c(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function p(e) {
            e.RTCPeerConnection.prototype.getLocalStreams = function () {
              var e = this;
              return (
                (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                Object.keys(this._shimmedLocalStreams).map(function (t) {
                  return e._shimmedLocalStreams[t][0];
                })
              );
            };
            var t = e.RTCPeerConnection.prototype.addTrack;
            e.RTCPeerConnection.prototype.addTrack = function (e, r) {
              if (!r) return t.apply(this, arguments);
              this._shimmedLocalStreams = this._shimmedLocalStreams || {};
              var n = t.apply(this, arguments);
              return (
                this._shimmedLocalStreams[r.id]
                  ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) &&
                    this._shimmedLocalStreams[r.id].push(n)
                  : (this._shimmedLocalStreams[r.id] = [r, n]),
                n
              );
            };
            var r = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function (e) {
              var t = this;
              (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                e.getTracks().forEach(function (e) {
                  if (
                    t.getSenders().find(function (t) {
                      return t.track === e;
                    })
                  )
                    throw new DOMException(
                      "Track already exists.",
                      "InvalidAccessError"
                    );
                });
              var n = this.getSenders();
              r.apply(this, arguments);
              var i = this.getSenders().filter(function (e) {
                return -1 === n.indexOf(e);
              });
              this._shimmedLocalStreams[e.id] = [e].concat(i);
            };
            var n = e.RTCPeerConnection.prototype.removeStream;
            e.RTCPeerConnection.prototype.removeStream = function (e) {
              return (
                (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                delete this._shimmedLocalStreams[e.id],
                n.apply(this, arguments)
              );
            };
            var i = e.RTCPeerConnection.prototype.removeTrack;
            e.RTCPeerConnection.prototype.removeTrack = function (e) {
              var t = this;
              return (
                (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                e &&
                  Object.keys(this._shimmedLocalStreams).forEach(function (r) {
                    var n = t._shimmedLocalStreams[r].indexOf(e);
                    -1 !== n && t._shimmedLocalStreams[r].splice(n, 1),
                      1 === t._shimmedLocalStreams[r].length &&
                        delete t._shimmedLocalStreams[r];
                  }),
                i.apply(this, arguments)
              );
            };
          }
        },
        { "../utils.js": 11, "./getdisplaymedia": 4, "./getusermedia": 5 },
      ],
      4: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.shimGetDisplayMedia = function (e, t) {
              if (
                (!e.navigator.mediaDevices ||
                  !("getDisplayMedia" in e.navigator.mediaDevices)) &&
                e.navigator.mediaDevices
              ) {
                if ("function" != typeof t) {
                  console.error(
                    "shimGetDisplayMedia: getSourceId argument is not a function"
                  );
                  return;
                }
                e.navigator.mediaDevices.getDisplayMedia = function (r) {
                  return t(r).then(function (t) {
                    var n = r.video && r.video.width,
                      i = r.video && r.video.height,
                      o = r.video && r.video.frameRate;
                    return (
                      (r.video = {
                        mandatory: {
                          chromeMediaSource: "desktop",
                          chromeMediaSourceId: t,
                          maxFrameRate: o || 3,
                        },
                      }),
                      n && (r.video.mandatory.maxWidth = n),
                      i && (r.video.mandatory.maxHeight = i),
                      e.navigator.mediaDevices.getUserMedia(r)
                    );
                  });
                };
              }
            });
        },
        {},
      ],
      5: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                };
          r.shimGetUserMedia = function (e, t) {
            var r = e && e.navigator;
            if (r.mediaDevices) {
              var i = function (e) {
                  if (
                    (void 0 === e ? "undefined" : n(e)) !== "object" ||
                    e.mandatory ||
                    e.optional
                  )
                    return e;
                  var t = {};
                  return (
                    Object.keys(e).forEach(function (r) {
                      if (
                        "require" !== r &&
                        "advanced" !== r &&
                        "mediaSource" !== r
                      ) {
                        var i = "object" === n(e[r]) ? e[r] : { ideal: e[r] };
                        void 0 !== i.exact &&
                          "number" == typeof i.exact &&
                          (i.min = i.max = i.exact);
                        var o = function (e, t) {
                          return e
                            ? e + t.charAt(0).toUpperCase() + t.slice(1)
                            : "deviceId" === t
                            ? "sourceId"
                            : t;
                        };
                        if (void 0 !== i.ideal) {
                          t.optional = t.optional || [];
                          var a = {};
                          "number" == typeof i.ideal
                            ? ((a[o("min", r)] = i.ideal),
                              t.optional.push(a),
                              ((a = {})[o("max", r)] = i.ideal),
                              t.optional.push(a))
                            : ((a[o("", r)] = i.ideal), t.optional.push(a));
                        }
                        void 0 !== i.exact && "number" != typeof i.exact
                          ? ((t.mandatory = t.mandatory || {}),
                            (t.mandatory[o("", r)] = i.exact))
                          : ["min", "max"].forEach(function (e) {
                              void 0 !== i[e] &&
                                ((t.mandatory = t.mandatory || {}),
                                (t.mandatory[o(e, r)] = i[e]));
                            });
                      }
                    }),
                    e.advanced &&
                      (t.optional = (t.optional || []).concat(e.advanced)),
                    t
                  );
                },
                o = function (e, o) {
                  if (t.version >= 61) return o(e);
                  if (
                    (e = JSON.parse(JSON.stringify(e))) &&
                    "object" === n(e.audio)
                  ) {
                    var s = function (e, t, r) {
                      t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
                    };
                    s(
                      (e = JSON.parse(JSON.stringify(e))).audio,
                      "autoGainControl",
                      "googAutoGainControl"
                    ),
                      s(e.audio, "noiseSuppression", "googNoiseSuppression"),
                      (e.audio = i(e.audio));
                  }
                  if (e && "object" === n(e.video)) {
                    var c = e.video.facingMode;
                    c =
                      c &&
                      ((void 0 === c ? "undefined" : n(c)) === "object"
                        ? c
                        : { ideal: c });
                    var p = t.version < 66;
                    if (
                      c &&
                      ("user" === c.exact ||
                        "environment" === c.exact ||
                        "user" === c.ideal ||
                        "environment" === c.ideal) &&
                      !(
                        r.mediaDevices.getSupportedConstraints &&
                        r.mediaDevices.getSupportedConstraints().facingMode &&
                        !p
                      )
                    ) {
                      delete e.video.facingMode;
                      var d = void 0;
                      if (
                        ("environment" === c.exact || "environment" === c.ideal
                          ? (d = ["back", "rear"])
                          : ("user" === c.exact || "user" === c.ideal) &&
                            (d = ["front"]),
                        d)
                      )
                        return r.mediaDevices
                          .enumerateDevices()
                          .then(function (t) {
                            var r = (t = t.filter(function (e) {
                              return "videoinput" === e.kind;
                            })).find(function (e) {
                              return d.some(function (t) {
                                return e.label.toLowerCase().includes(t);
                              });
                            });
                            return (
                              !r &&
                                t.length &&
                                d.includes("back") &&
                                (r = t[t.length - 1]),
                              r &&
                                (e.video.deviceId = c.exact
                                  ? { exact: r.deviceId }
                                  : { ideal: r.deviceId }),
                              (e.video = i(e.video)),
                              a("chrome: " + JSON.stringify(e)),
                              o(e)
                            );
                          });
                    }
                    e.video = i(e.video);
                  }
                  return a("chrome: " + JSON.stringify(e)), o(e);
                },
                s = function (e) {
                  return t.version >= 64
                    ? e
                    : {
                        name:
                          {
                            PermissionDeniedError: "NotAllowedError",
                            PermissionDismissedError: "NotAllowedError",
                            InvalidStateError: "NotAllowedError",
                            DevicesNotFoundError: "NotFoundError",
                            ConstraintNotSatisfiedError: "OverconstrainedError",
                            TrackStartError: "NotReadableError",
                            MediaDeviceFailedDueToShutdown: "NotAllowedError",
                            MediaDeviceKillSwitchOn: "NotAllowedError",
                            TabCaptureError: "AbortError",
                            ScreenCaptureError: "AbortError",
                            DeviceCaptureError: "AbortError",
                          }[e.name] || e.name,
                        message: e.message,
                        constraint: e.constraint || e.constraintName,
                        toString: function () {
                          return (
                            this.name + (this.message && ": ") + this.message
                          );
                        },
                      };
                },
                c = function (e, t, n) {
                  o(e, function (e) {
                    r.webkitGetUserMedia(e, t, function (e) {
                      n && n(s(e));
                    });
                  });
                };
              if (((r.getUserMedia = c.bind(r)), r.mediaDevices.getUserMedia)) {
                var p = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                r.mediaDevices.getUserMedia = function (e) {
                  return o(e, function (e) {
                    return p(e).then(
                      function (t) {
                        if (
                          (e.audio && !t.getAudioTracks().length) ||
                          (e.video && !t.getVideoTracks().length)
                        )
                          throw (
                            (t.getTracks().forEach(function (e) {
                              e.stop();
                            }),
                            new DOMException("", "NotFoundError"))
                          );
                        return t;
                      },
                      function (e) {
                        return Promise.reject(s(e));
                      }
                    );
                  });
                };
              }
            }
          };
          var i,
            o,
            a = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("../utils.js")).log;
        },
        { "../utils.js": 11 },
      ],
      6: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n,
            i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  };
          (r.shimRTCIceCandidate = function (e) {
            if (
              e.RTCIceCandidate &&
              (!e.RTCIceCandidate ||
                !("foundation" in e.RTCIceCandidate.prototype))
            ) {
              var t = e.RTCIceCandidate;
              (e.RTCIceCandidate = function (e) {
                if (
                  ((void 0 === e ? "undefined" : i(e)) === "object" &&
                    e.candidate &&
                    0 === e.candidate.indexOf("a=") &&
                    ((e = JSON.parse(JSON.stringify(e))).candidate =
                      e.candidate.substr(2)),
                  e.candidate && e.candidate.length)
                ) {
                  var r,
                    n = Object.assign(
                      new t(e),
                      s.default.parseCandidate(e.candidate)
                    );
                  return (
                    (n.toJSON = function () {
                      return {
                        candidate: n.candidate,
                        sdpMid: n.sdpMid,
                        sdpMLineIndex: n.sdpMLineIndex,
                        usernameFragment: n.usernameFragment,
                      };
                    }),
                    n
                  );
                }
                return new t(e);
              }),
                (e.RTCIceCandidate.prototype = t.prototype),
                c.wrapPeerConnectionEvent(e, "icecandidate", function (t) {
                  return (
                    t.candidate &&
                      Object.defineProperty(t, "candidate", {
                        value: new e.RTCIceCandidate(t.candidate),
                        writable: "false",
                      }),
                    t
                  );
                });
            }
          }),
            (r.shimMaxMessageSize = function (e, t) {
              if (e.RTCPeerConnection) {
                "sctp" in e.RTCPeerConnection.prototype ||
                  Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                    get: function () {
                      return void 0 === this._sctp ? null : this._sctp;
                    },
                  });
                var r = function (e) {
                    if (!e || !e.sdp) return !1;
                    var t = s.default.splitSections(e.sdp);
                    return (
                      t.shift(),
                      t.some(function (e) {
                        var t = s.default.parseMLine(e);
                        return (
                          t &&
                          "application" === t.kind &&
                          -1 !== t.protocol.indexOf("SCTP")
                        );
                      })
                    );
                  },
                  n = function (e) {
                    var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                    if (null === t || t.length < 2) return -1;
                    var r = parseInt(t[1], 10);
                    return r != r ? -1 : r;
                  },
                  i = function (e) {
                    var r = 65536;
                    return (
                      "firefox" === t.browser &&
                        (r =
                          t.version < 57
                            ? -1 === e
                              ? 16384
                              : 2147483637
                            : t.version < 60
                            ? 57 === t.version
                              ? 65535
                              : 65536
                            : 2147483637),
                      r
                    );
                  },
                  o = function (e, r) {
                    var n = 65536;
                    "firefox" === t.browser && 57 === t.version && (n = 65535);
                    var i = s.default.matchPrefix(e.sdp, "a=max-message-size:");
                    return (
                      i.length > 0
                        ? (n = parseInt(i[0].substr(19), 10))
                        : "firefox" === t.browser &&
                          -1 !== r &&
                          (n = 2147483637),
                      n
                    );
                  },
                  a = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription =
                  function () {
                    if (
                      ((this._sctp = null),
                      "chrome" === t.browser &&
                        t.version >= 76 &&
                        "plan-b" === this.getConfiguration().sdpSemantics &&
                        Object.defineProperty(this, "sctp", {
                          get: function () {
                            return void 0 === this._sctp ? null : this._sctp;
                          },
                          enumerable: !0,
                          configurable: !0,
                        }),
                      r(arguments[0]))
                    ) {
                      var e = n(arguments[0]),
                        s = i(e),
                        c = o(arguments[0], e),
                        p = void 0;
                      p =
                        0 === s && 0 === c
                          ? Number.POSITIVE_INFINITY
                          : 0 === s || 0 === c
                          ? Math.max(s, c)
                          : Math.min(s, c);
                      var d = {};
                      Object.defineProperty(d, "maxMessageSize", {
                        get: function () {
                          return p;
                        },
                      }),
                        (this._sctp = d);
                    }
                    return a.apply(this, arguments);
                  };
              }
            }),
            (r.shimSendThrowTypeError = function (e) {
              if (
                e.RTCPeerConnection &&
                "createDataChannel" in e.RTCPeerConnection.prototype
              ) {
                var t = e.RTCPeerConnection.prototype.createDataChannel;
                (e.RTCPeerConnection.prototype.createDataChannel = function () {
                  var e = t.apply(this, arguments);
                  return r(e, this), e;
                }),
                  c.wrapPeerConnectionEvent(e, "datachannel", function (e) {
                    return r(e.channel, e.target), e;
                  });
              }
              function r(e, t) {
                var r = e.send;
                e.send = function () {
                  var n = arguments[0],
                    i = n.length || n.size || n.byteLength;
                  if (
                    "open" === e.readyState &&
                    t.sctp &&
                    i > t.sctp.maxMessageSize
                  )
                    throw TypeError(
                      "Message too large (can send a maximum of " +
                        t.sctp.maxMessageSize +
                        " bytes)"
                    );
                  return r.apply(e, arguments);
                };
              }
            }),
            (r.shimConnectionState = function (e) {
              if (
                e.RTCPeerConnection &&
                !("connectionState" in e.RTCPeerConnection.prototype)
              ) {
                var t = e.RTCPeerConnection.prototype;
                Object.defineProperty(t, "connectionState", {
                  get: function () {
                    return (
                      { completed: "connected", checking: "connecting" }[
                        this.iceConnectionState
                      ] || this.iceConnectionState
                    );
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                  Object.defineProperty(t, "onconnectionstatechange", {
                    get: function () {
                      return this._onconnectionstatechange || null;
                    },
                    set: function (e) {
                      this._onconnectionstatechange &&
                        (this.removeEventListener(
                          "connectionstatechange",
                          this._onconnectionstatechange
                        ),
                        delete this._onconnectionstatechange),
                        e &&
                          this.addEventListener(
                            "connectionstatechange",
                            (this._onconnectionstatechange = e)
                          );
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  ["setLocalDescription", "setRemoteDescription"].forEach(
                    function (e) {
                      var r = t[e];
                      t[e] = function () {
                        return (
                          this._connectionstatechangepoly ||
                            ((this._connectionstatechangepoly = function (e) {
                              var t = e.target;
                              if (
                                t._lastConnectionState !== t.connectionState
                              ) {
                                t._lastConnectionState = t.connectionState;
                                var r = new Event("connectionstatechange", e);
                                t.dispatchEvent(r);
                              }
                              return e;
                            }),
                            this.addEventListener(
                              "iceconnectionstatechange",
                              this._connectionstatechangepoly
                            )),
                          r.apply(this, arguments)
                        );
                      };
                    }
                  );
              }
            }),
            (r.removeExtmapAllowMixed = function (e, t) {
              if (
                e.RTCPeerConnection &&
                ("chrome" !== t.browser || !(t.version >= 71)) &&
                ("safari" !== t.browser || !(t.version >= 605))
              ) {
                var r = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription = function (
                  t
                ) {
                  if (
                    t &&
                    t.sdp &&
                    -1 !== t.sdp.indexOf("\na=extmap-allow-mixed")
                  ) {
                    var n = t.sdp
                      .split("\n")
                      .filter(function (e) {
                        return "a=extmap-allow-mixed" !== e.trim();
                      })
                      .join("\n");
                    e.RTCSessionDescription &&
                    t instanceof e.RTCSessionDescription
                      ? (arguments[0] = new e.RTCSessionDescription({
                          type: t.type,
                          sdp: n,
                        }))
                      : (t.sdp = n);
                  }
                  return r.apply(this, arguments);
                };
              }
            }),
            (r.shimAddIceCandidateNullOrEmpty = function (e, t) {
              if (e.RTCPeerConnection && e.RTCPeerConnection.prototype) {
                var r = e.RTCPeerConnection.prototype.addIceCandidate;
                r &&
                  0 !== r.length &&
                  (e.RTCPeerConnection.prototype.addIceCandidate = function () {
                    return arguments[0]
                      ? (("chrome" === t.browser && t.version < 78) ||
                          ("firefox" === t.browser && t.version < 68) ||
                          "safari" === t.browser) &&
                        arguments[0] &&
                        "" === arguments[0].candidate
                        ? Promise.resolve()
                        : r.apply(this, arguments)
                      : (arguments[1] && arguments[1].apply(null),
                        Promise.resolve());
                  });
              }
            }),
            (r.shimParameterlessSetLocalDescription = function (e, t) {
              if (e.RTCPeerConnection && e.RTCPeerConnection.prototype) {
                var r = e.RTCPeerConnection.prototype.setLocalDescription;
                r &&
                  0 !== r.length &&
                  (e.RTCPeerConnection.prototype.setLocalDescription =
                    function () {
                      var e = this,
                        t = arguments[0] || {};
                      if (
                        (void 0 === t ? "undefined" : i(t)) !== "object" ||
                        (t.type && t.sdp)
                      )
                        return r.apply(this, arguments);
                      if (!(t = { type: t.type, sdp: t.sdp }).type)
                        switch (this.signalingState) {
                          case "stable":
                          case "have-local-offer":
                          case "have-remote-pranswer":
                            t.type = "offer";
                            break;
                          default:
                            t.type = "answer";
                        }
                      return t.sdp ||
                        ("offer" !== t.type && "answer" !== t.type)
                        ? r.apply(this, [t])
                        : ("offer" === t.type
                            ? this.createOffer
                            : this.createAnswer
                          )
                            .apply(this)
                            .then(function (t) {
                              return r.apply(e, [t]);
                            });
                    });
              }
            });
          var o,
            a,
            s = ((n = e("sdp")), n && n.__esModule ? n : { default: n }),
            c = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("./utils"));
        },
        { "./utils": 11, sdp: 12 },
      ],
      7: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.shimGetDisplayMedia = r.shimGetUserMedia = void 0);
          var n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            i = e("./getusermedia");
          Object.defineProperty(r, "shimGetUserMedia", {
            enumerable: !0,
            get: function () {
              return i.shimGetUserMedia;
            },
          });
          var o = e("./getdisplaymedia");
          Object.defineProperty(r, "shimGetDisplayMedia", {
            enumerable: !0,
            get: function () {
              return o.shimGetDisplayMedia;
            },
          }),
            (r.shimOnTrack = function (e) {
              (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCTrackEvent &&
                "receiver" in e.RTCTrackEvent.prototype &&
                !("transceiver" in e.RTCTrackEvent.prototype) &&
                Object.defineProperty(
                  e.RTCTrackEvent.prototype,
                  "transceiver",
                  {
                    get: function () {
                      return { receiver: this.receiver };
                    },
                  }
                );
            }),
            (r.shimPeerConnection = function (e, t) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                (e.RTCPeerConnection || e.mozRTCPeerConnection)
              ) {
                !e.RTCPeerConnection &&
                  e.mozRTCPeerConnection &&
                  (e.RTCPeerConnection = e.mozRTCPeerConnection),
                  t.version < 53 &&
                    [
                      "setLocalDescription",
                      "setRemoteDescription",
                      "addIceCandidate",
                    ].forEach(function (t) {
                      var r,
                        n,
                        i,
                        o = e.RTCPeerConnection.prototype[t],
                        a =
                          ((r = {}),
                          (n = t),
                          (i = function () {
                            return (
                              (arguments[0] = new (
                                "addIceCandidate" === t
                                  ? e.RTCIceCandidate
                                  : e.RTCSessionDescription
                              )(arguments[0])),
                              o.apply(this, arguments)
                            );
                          }),
                          n in r
                            ? Object.defineProperty(r, n, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (r[n] = i),
                          r);
                      e.RTCPeerConnection.prototype[t] = a[t];
                    });
                var r = {
                    inboundrtp: "inbound-rtp",
                    outboundrtp: "outbound-rtp",
                    candidatepair: "candidate-pair",
                    localcandidate: "local-candidate",
                    remotecandidate: "remote-candidate",
                  },
                  i = e.RTCPeerConnection.prototype.getStats;
                e.RTCPeerConnection.prototype.getStats = function () {
                  var e = Array.prototype.slice.call(arguments),
                    n = e[0],
                    o = e[1],
                    a = e[2];
                  return i
                    .apply(this, [n || null])
                    .then(function (e) {
                      if (t.version < 53 && !o)
                        try {
                          e.forEach(function (e) {
                            e.type = r[e.type] || e.type;
                          });
                        } catch (n) {
                          if ("TypeError" !== n.name) throw n;
                          e.forEach(function (t, n) {
                            e.set(
                              n,
                              Object.assign({}, t, {
                                type: r[t.type] || t.type,
                              })
                            );
                          });
                        }
                      return e;
                    })
                    .then(o, a);
                };
              }
            }),
            (r.shimSenderGetStats = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCPeerConnection &&
                e.RTCRtpSender &&
                (!e.RTCRtpSender || !("getStats" in e.RTCRtpSender.prototype))
              ) {
                var t = e.RTCPeerConnection.prototype.getSenders;
                t &&
                  (e.RTCPeerConnection.prototype.getSenders = function () {
                    var e = this,
                      r = t.apply(this, []);
                    return (
                      r.forEach(function (t) {
                        return (t._pc = e);
                      }),
                      r
                    );
                  });
                var r = e.RTCPeerConnection.prototype.addTrack;
                r &&
                  (e.RTCPeerConnection.prototype.addTrack = function () {
                    var e = r.apply(this, arguments);
                    return (e._pc = this), e;
                  }),
                  (e.RTCRtpSender.prototype.getStats = function () {
                    return this.track
                      ? this._pc.getStats(this.track)
                      : Promise.resolve(new Map());
                  });
              }
            }),
            (r.shimReceiverGetStats = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCPeerConnection &&
                e.RTCRtpSender &&
                (!e.RTCRtpSender || !("getStats" in e.RTCRtpReceiver.prototype))
              ) {
                var t = e.RTCPeerConnection.prototype.getReceivers;
                t &&
                  (e.RTCPeerConnection.prototype.getReceivers = function () {
                    var e = this,
                      r = t.apply(this, []);
                    return (
                      r.forEach(function (t) {
                        return (t._pc = e);
                      }),
                      r
                    );
                  }),
                  s.wrapPeerConnectionEvent(e, "track", function (e) {
                    return (e.receiver._pc = e.srcElement), e;
                  }),
                  (e.RTCRtpReceiver.prototype.getStats = function () {
                    return this._pc.getStats(this.track);
                  });
              }
            }),
            (r.shimRemoveStream = function (e) {
              e.RTCPeerConnection &&
                !("removeStream" in e.RTCPeerConnection.prototype) &&
                (e.RTCPeerConnection.prototype.removeStream = function (e) {
                  var t = this;
                  s.deprecated("removeStream", "removeTrack"),
                    this.getSenders().forEach(function (r) {
                      r.track &&
                        e.getTracks().includes(r.track) &&
                        t.removeTrack(r);
                    });
                });
            }),
            (r.shimRTCDataChannel = function (e) {
              e.DataChannel &&
                !e.RTCDataChannel &&
                (e.RTCDataChannel = e.DataChannel);
            }),
            (r.shimAddTransceiver = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCPeerConnection
              ) {
                var t = e.RTCPeerConnection.prototype.addTransceiver;
                t &&
                  (e.RTCPeerConnection.prototype.addTransceiver = function () {
                    this.setParametersPromises = [];
                    var e = arguments[1],
                      r = e && "sendEncodings" in e;
                    r &&
                      e.sendEncodings.forEach(function (e) {
                        if ("rid" in e && !/^[a-z0-9]{0,16}$/i.test(e.rid))
                          throw TypeError("Invalid RID value provided.");
                        if (
                          "scaleResolutionDownBy" in e &&
                          !(parseFloat(e.scaleResolutionDownBy) >= 1)
                        )
                          throw RangeError(
                            "scale_resolution_down_by must be >= 1.0"
                          );
                        if (
                          "maxFramerate" in e &&
                          !(parseFloat(e.maxFramerate) >= 0)
                        )
                          throw RangeError("max_framerate must be >= 0.0");
                      });
                    var n = t.apply(this, arguments);
                    if (r) {
                      var i = n.sender,
                        o = i.getParameters();
                      ("encodings" in o &&
                        (1 !== o.encodings.length ||
                          0 !== Object.keys(o.encodings[0]).length)) ||
                        ((o.encodings = e.sendEncodings),
                        (i.sendEncodings = e.sendEncodings),
                        this.setParametersPromises.push(
                          i
                            .setParameters(o)
                            .then(function () {
                              delete i.sendEncodings;
                            })
                            .catch(function () {
                              delete i.sendEncodings;
                            })
                        ));
                    }
                    return n;
                  });
              }
            }),
            (r.shimGetParameters = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCRtpSender
              ) {
                var t = e.RTCRtpSender.prototype.getParameters;
                t &&
                  (e.RTCRtpSender.prototype.getParameters = function () {
                    var e = t.apply(this, arguments);
                    return (
                      "encodings" in e ||
                        (e.encodings = [].concat(this.sendEncodings || [{}])),
                      e
                    );
                  });
              }
            }),
            (r.shimCreateOffer = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCPeerConnection
              ) {
                var t = e.RTCPeerConnection.prototype.createOffer;
                e.RTCPeerConnection.prototype.createOffer = function () {
                  var e = this,
                    r = arguments;
                  return this.setParametersPromises &&
                    this.setParametersPromises.length
                    ? Promise.all(this.setParametersPromises)
                        .then(function () {
                          return t.apply(e, r);
                        })
                        .finally(function () {
                          e.setParametersPromises = [];
                        })
                    : t.apply(this, arguments);
                };
              }
            }),
            (r.shimCreateAnswer = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCPeerConnection
              ) {
                var t = e.RTCPeerConnection.prototype.createAnswer;
                e.RTCPeerConnection.prototype.createAnswer = function () {
                  var e = this,
                    r = arguments;
                  return this.setParametersPromises &&
                    this.setParametersPromises.length
                    ? Promise.all(this.setParametersPromises)
                        .then(function () {
                          return t.apply(e, r);
                        })
                        .finally(function () {
                          e.setParametersPromises = [];
                        })
                    : t.apply(this, arguments);
                };
              }
            });
          var a,
            s = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("../utils"));
        },
        { "../utils": 11, "./getdisplaymedia": 8, "./getusermedia": 9 },
      ],
      8: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.shimGetDisplayMedia = function (e, t) {
              (!e.navigator.mediaDevices ||
                !("getDisplayMedia" in e.navigator.mediaDevices)) &&
                e.navigator.mediaDevices &&
                (e.navigator.mediaDevices.getDisplayMedia = function (r) {
                  if (!(r && r.video)) {
                    var n = new DOMException(
                      "getDisplayMedia without video constraints is undefined"
                    );
                    return (
                      (n.name = "NotFoundError"),
                      (n.code = 8),
                      Promise.reject(n)
                    );
                  }
                  return (
                    !0 === r.video
                      ? (r.video = { mediaSource: t })
                      : (r.video.mediaSource = t),
                    e.navigator.mediaDevices.getUserMedia(r)
                  );
                });
            });
        },
        {},
      ],
      9: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                };
          r.shimGetUserMedia = function (e, t) {
            var r = e && e.navigator,
              i = e && e.MediaStreamTrack;
            if (
              ((r.getUserMedia = function (e, t, n) {
                o.deprecated(
                  "navigator.getUserMedia",
                  "navigator.mediaDevices.getUserMedia"
                ),
                  r.mediaDevices.getUserMedia(e).then(t, n);
              }),
              !(
                t.version > 55 &&
                "autoGainControl" in r.mediaDevices.getSupportedConstraints()
              ))
            ) {
              var a = function (e, t, r) {
                  t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
                },
                s = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
              if (
                ((r.mediaDevices.getUserMedia = function (e) {
                  return (
                    (void 0 === e ? "undefined" : n(e)) === "object" &&
                      "object" === n(e.audio) &&
                      (a(
                        (e = JSON.parse(JSON.stringify(e))).audio,
                        "autoGainControl",
                        "mozAutoGainControl"
                      ),
                      a(e.audio, "noiseSuppression", "mozNoiseSuppression")),
                    s(e)
                  );
                }),
                i && i.prototype.getSettings)
              ) {
                var c = i.prototype.getSettings;
                i.prototype.getSettings = function () {
                  var e = c.apply(this, arguments);
                  return (
                    a(e, "mozAutoGainControl", "autoGainControl"),
                    a(e, "mozNoiseSuppression", "noiseSuppression"),
                    e
                  );
                };
              }
              if (i && i.prototype.applyConstraints) {
                var p = i.prototype.applyConstraints;
                i.prototype.applyConstraints = function (e) {
                  return (
                    "audio" === this.kind &&
                      (void 0 === e ? "undefined" : n(e)) === "object" &&
                      (a(
                        (e = JSON.parse(JSON.stringify(e))),
                        "autoGainControl",
                        "mozAutoGainControl"
                      ),
                      a(e, "noiseSuppression", "mozNoiseSuppression")),
                    p.apply(this, [e])
                  );
                };
              }
            }
          };
          var i,
            o = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("../utils"));
        },
        { "../utils": 11 },
      ],
      10: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                };
          (r.shimLocalStreamsAPI = function (e) {
            if (
              (void 0 === e ? "undefined" : n(e)) === "object" &&
              e.RTCPeerConnection
            ) {
              if (
                ("getLocalStreams" in e.RTCPeerConnection.prototype ||
                  (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                    return (
                      this._localStreams || (this._localStreams = []),
                      this._localStreams
                    );
                  }),
                !("addStream" in e.RTCPeerConnection.prototype))
              ) {
                var t = e.RTCPeerConnection.prototype.addTrack;
                (e.RTCPeerConnection.prototype.addStream = function (e) {
                  var r = this;
                  this._localStreams || (this._localStreams = []),
                    this._localStreams.includes(e) ||
                      this._localStreams.push(e),
                    e.getAudioTracks().forEach(function (n) {
                      return t.call(r, n, e);
                    }),
                    e.getVideoTracks().forEach(function (n) {
                      return t.call(r, n, e);
                    });
                }),
                  (e.RTCPeerConnection.prototype.addTrack = function (e) {
                    for (
                      var r = this,
                        n = arguments.length,
                        i = Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      i[o - 1] = arguments[o];
                    return (
                      i &&
                        i.forEach(function (e) {
                          r._localStreams
                            ? r._localStreams.includes(e) ||
                              r._localStreams.push(e)
                            : (r._localStreams = [e]);
                        }),
                      t.apply(this, arguments)
                    );
                  });
              }
              "removeStream" in e.RTCPeerConnection.prototype ||
                (e.RTCPeerConnection.prototype.removeStream = function (e) {
                  var t = this;
                  this._localStreams || (this._localStreams = []);
                  var r = this._localStreams.indexOf(e);
                  if (-1 !== r) {
                    this._localStreams.splice(r, 1);
                    var n = e.getTracks();
                    this.getSenders().forEach(function (e) {
                      n.includes(e.track) && t.removeTrack(e);
                    });
                  }
                });
            }
          }),
            (r.shimRemoteStreamsAPI = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCPeerConnection &&
                ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
                  (e.RTCPeerConnection.prototype.getRemoteStreams =
                    function () {
                      return this._remoteStreams ? this._remoteStreams : [];
                    }),
                !("onaddstream" in e.RTCPeerConnection.prototype))
              ) {
                Object.defineProperty(
                  e.RTCPeerConnection.prototype,
                  "onaddstream",
                  {
                    get: function () {
                      return this._onaddstream;
                    },
                    set: function (e) {
                      var t = this;
                      this._onaddstream &&
                        (this.removeEventListener(
                          "addstream",
                          this._onaddstream
                        ),
                        this.removeEventListener(
                          "track",
                          this._onaddstreampoly
                        )),
                        this.addEventListener(
                          "addstream",
                          (this._onaddstream = e)
                        ),
                        this.addEventListener(
                          "track",
                          (this._onaddstreampoly = function (e) {
                            e.streams.forEach(function (e) {
                              if (
                                (t._remoteStreams || (t._remoteStreams = []),
                                !t._remoteStreams.includes(e))
                              ) {
                                t._remoteStreams.push(e);
                                var r = new Event("addstream");
                                (r.stream = e), t.dispatchEvent(r);
                              }
                            });
                          })
                        );
                    },
                  }
                );
                var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription =
                  function () {
                    var e = this;
                    return (
                      this._onaddstreampoly ||
                        this.addEventListener(
                          "track",
                          (this._onaddstreampoly = function (t) {
                            t.streams.forEach(function (t) {
                              if (
                                (e._remoteStreams || (e._remoteStreams = []),
                                !(e._remoteStreams.indexOf(t) >= 0))
                              ) {
                                e._remoteStreams.push(t);
                                var r = new Event("addstream");
                                (r.stream = t), e.dispatchEvent(r);
                              }
                            });
                          })
                        ),
                      t.apply(e, arguments)
                    );
                  };
              }
            }),
            (r.shimCallbacksAPI = function (e) {
              if (
                (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCPeerConnection
              ) {
                var t = e.RTCPeerConnection.prototype,
                  r = t.createOffer,
                  i = t.createAnswer,
                  o = t.setLocalDescription,
                  a = t.setRemoteDescription,
                  s = t.addIceCandidate;
                (t.createOffer = function (e, t) {
                  var n = arguments.length >= 2 ? arguments[2] : arguments[0],
                    i = r.apply(this, [n]);
                  return t ? (i.then(e, t), Promise.resolve()) : i;
                }),
                  (t.createAnswer = function (e, t) {
                    var r = arguments.length >= 2 ? arguments[2] : arguments[0],
                      n = i.apply(this, [r]);
                    return t ? (n.then(e, t), Promise.resolve()) : n;
                  });
                var c = function (e, t, r) {
                  var n = o.apply(this, [e]);
                  return r ? (n.then(t, r), Promise.resolve()) : n;
                };
                (t.setLocalDescription = c),
                  (c = function (e, t, r) {
                    var n = a.apply(this, [e]);
                    return r ? (n.then(t, r), Promise.resolve()) : n;
                  }),
                  (t.setRemoteDescription = c),
                  (c = function (e, t, r) {
                    var n = s.apply(this, [e]);
                    return r ? (n.then(t, r), Promise.resolve()) : n;
                  }),
                  (t.addIceCandidate = c);
              }
            }),
            (r.shimGetUserMedia = function (e) {
              var t = e && e.navigator;
              if (t.mediaDevices && t.mediaDevices.getUserMedia) {
                var r = t.mediaDevices,
                  n = r.getUserMedia.bind(r);
                t.mediaDevices.getUserMedia = function (e) {
                  return n(a(e));
                };
              }
              !t.getUserMedia &&
                t.mediaDevices &&
                t.mediaDevices.getUserMedia &&
                (t.getUserMedia = function (e, r, n) {
                  t.mediaDevices.getUserMedia(e).then(r, n);
                }.bind(t));
            }),
            (r.shimConstraints = a),
            (r.shimRTCIceServerUrls = function (e) {
              if (e.RTCPeerConnection) {
                var t = e.RTCPeerConnection;
                (e.RTCPeerConnection = function (e, r) {
                  if (e && e.iceServers) {
                    for (var n = [], i = 0; i < e.iceServers.length; i++) {
                      var a = e.iceServers[i];
                      !a.hasOwnProperty("urls") && a.hasOwnProperty("url")
                        ? (o.deprecated(
                            "RTCIceServer.url",
                            "RTCIceServer.urls"
                          ),
                          ((a = JSON.parse(JSON.stringify(a))).urls = a.url),
                          delete a.url,
                          n.push(a))
                        : n.push(e.iceServers[i]);
                    }
                    e.iceServers = n;
                  }
                  return new t(e, r);
                }),
                  (e.RTCPeerConnection.prototype = t.prototype),
                  "generateCertificate" in t &&
                    Object.defineProperty(
                      e.RTCPeerConnection,
                      "generateCertificate",
                      {
                        get: function () {
                          return t.generateCertificate;
                        },
                      }
                    );
              }
            }),
            (r.shimTrackEventTransceiver = function (e) {
              (void 0 === e ? "undefined" : n(e)) === "object" &&
                e.RTCTrackEvent &&
                "receiver" in e.RTCTrackEvent.prototype &&
                !("transceiver" in e.RTCTrackEvent.prototype) &&
                Object.defineProperty(
                  e.RTCTrackEvent.prototype,
                  "transceiver",
                  {
                    get: function () {
                      return { receiver: this.receiver };
                    },
                  }
                );
            }),
            (r.shimCreateOfferLegacy = function (e) {
              var t = e.RTCPeerConnection.prototype.createOffer;
              e.RTCPeerConnection.prototype.createOffer = function (e) {
                if (e) {
                  void 0 !== e.offerToReceiveAudio &&
                    (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                  var r = this.getTransceivers().find(function (e) {
                    return "audio" === e.receiver.track.kind;
                  });
                  !1 === e.offerToReceiveAudio && r
                    ? "sendrecv" === r.direction
                      ? r.setDirection
                        ? r.setDirection("sendonly")
                        : (r.direction = "sendonly")
                      : "recvonly" === r.direction &&
                        (r.setDirection
                          ? r.setDirection("inactive")
                          : (r.direction = "inactive"))
                    : !0 !== e.offerToReceiveAudio ||
                      r ||
                      this.addTransceiver("audio"),
                    void 0 !== e.offerToReceiveVideo &&
                      (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                  var n = this.getTransceivers().find(function (e) {
                    return "video" === e.receiver.track.kind;
                  });
                  !1 === e.offerToReceiveVideo && n
                    ? "sendrecv" === n.direction
                      ? n.setDirection
                        ? n.setDirection("sendonly")
                        : (n.direction = "sendonly")
                      : "recvonly" === n.direction &&
                        (n.setDirection
                          ? n.setDirection("inactive")
                          : (n.direction = "inactive"))
                    : !0 !== e.offerToReceiveVideo ||
                      n ||
                      this.addTransceiver("video");
                }
                return t.apply(this, arguments);
              };
            }),
            (r.shimAudioContext = function (e) {
              (void 0 === e ? "undefined" : n(e)) === "object" &&
                !e.AudioContext &&
                (e.AudioContext = e.webkitAudioContext);
            });
          var i,
            o = (function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t.default = e), t;
            })(e("../utils"));
          function a(e) {
            return e && void 0 !== e.video
              ? Object.assign({}, e, { video: o.compactObject(e.video) })
              : e;
          }
        },
        { "../utils": 11 },
      ],
      11: [
        function (e, t, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 });
          var n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                };
          (r.extractVersion = a),
            (r.wrapPeerConnectionEvent = function (e, t, r) {
              if (e.RTCPeerConnection) {
                var n = e.RTCPeerConnection.prototype,
                  i = n.addEventListener;
                n.addEventListener = function (e, n) {
                  if (e !== t) return i.apply(this, arguments);
                  var o = function (e) {
                    var t = r(e);
                    t && (n.handleEvent ? n.handleEvent(t) : n(t));
                  };
                  return (
                    (this._eventMap = this._eventMap || {}),
                    this._eventMap[t] || (this._eventMap[t] = new Map()),
                    this._eventMap[t].set(n, o),
                    i.apply(this, [e, o])
                  );
                };
                var o = n.removeEventListener;
                (n.removeEventListener = function (e, r) {
                  if (
                    e !== t ||
                    !this._eventMap ||
                    !this._eventMap[t] ||
                    !this._eventMap[t].has(r)
                  )
                    return o.apply(this, arguments);
                  var n = this._eventMap[t].get(r);
                  return (
                    this._eventMap[t].delete(r),
                    0 === this._eventMap[t].size && delete this._eventMap[t],
                    0 === Object.keys(this._eventMap).length &&
                      delete this._eventMap,
                    o.apply(this, [e, n])
                  );
                }),
                  Object.defineProperty(n, "on" + t, {
                    get: function () {
                      return this["_on" + t];
                    },
                    set: function (e) {
                      this["_on" + t] &&
                        (this.removeEventListener(t, this["_on" + t]),
                        delete this["_on" + t]),
                        e && this.addEventListener(t, (this["_on" + t] = e));
                    },
                    enumerable: !0,
                    configurable: !0,
                  });
              }
            }),
            (r.disableLog = function (e) {
              return "boolean" != typeof e
                ? Error(
                    "Argument type: " +
                      (void 0 === e ? "undefined" : n(e)) +
                      ". Please use a boolean."
                  )
                : ((i = e),
                  e
                    ? "adapter.js logging disabled"
                    : "adapter.js logging enabled");
            }),
            (r.disableWarnings = function (e) {
              return "boolean" != typeof e
                ? Error(
                    "Argument type: " +
                      (void 0 === e ? "undefined" : n(e)) +
                      ". Please use a boolean."
                  )
                : ((o = !e),
                  "adapter.js deprecation warnings " +
                    (e ? "disabled" : "enabled"));
            }),
            (r.log = function () {
              ("undefined" == typeof window ? "undefined" : n(window)) ===
                "object" &&
                !i &&
                "undefined" != typeof console &&
                "function" == typeof console.log &&
                console.log.apply(console, arguments);
            }),
            (r.deprecated = function (e, t) {
              o &&
                console.warn(
                  e + " is deprecated, please use " + t + " instead."
                );
            }),
            (r.detectBrowser = function (e) {
              var t = { browser: null, version: null };
              if (void 0 === e || !e.navigator)
                return (t.browser = "Not a browser."), t;
              var r = e.navigator;
              return (
                r.mozGetUserMedia
                  ? ((t.browser = "firefox"),
                    (t.version = a(r.userAgent, /Firefox\/(\d+)\./, 1)))
                  : r.webkitGetUserMedia ||
                    (!1 === e.isSecureContext &&
                      e.webkitRTCPeerConnection &&
                      !e.RTCIceGatherer)
                  ? ((t.browser = "chrome"),
                    (t.version = a(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)))
                  : e.RTCPeerConnection &&
                    r.userAgent.match(/AppleWebKit\/(\d+)\./)
                  ? ((t.browser = "safari"),
                    (t.version = a(r.userAgent, /AppleWebKit\/(\d+)\./, 1)),
                    (t.supportsUnifiedPlan =
                      e.RTCRtpTransceiver &&
                      "currentDirection" in e.RTCRtpTransceiver.prototype))
                  : (t.browser = "Not a supported browser."),
                t
              );
            }),
            (r.compactObject = function e(t) {
              return s(t)
                ? Object.keys(t).reduce(function (r, n) {
                    var i,
                      o,
                      a,
                      c = s(t[n]),
                      p = c ? e(t[n]) : t[n],
                      d = c && !Object.keys(p).length;
                    return void 0 === p || d
                      ? r
                      : Object.assign(
                          r,
                          ((i = {}),
                          (o = n),
                          (a = p),
                          o in i
                            ? Object.defineProperty(i, o, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (i[o] = a),
                          i)
                        );
                  }, {})
                : t;
            }),
            (r.walkStats = c),
            (r.filterStats = function (e, t, r) {
              var n = r ? "outbound-rtp" : "inbound-rtp",
                i = new Map();
              if (null === t) return i;
              var o = [];
              return (
                e.forEach(function (e) {
                  "track" === e.type && e.trackIdentifier === t.id && o.push(e);
                }),
                o.forEach(function (t) {
                  e.forEach(function (r) {
                    r.type === n && r.trackId === t.id && c(e, r, i);
                  });
                }),
                i
              );
            });
          var i = !0,
            o = !0;
          function a(e, t, r) {
            var n = e.match(t);
            return n && n.length >= r && parseInt(n[r], 10);
          }
          function s(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
          }
          function c(e, t, r) {
            !(!t || r.has(t.id)) &&
              (r.set(t.id, t),
              Object.keys(t).forEach(function (n) {
                n.endsWith("Id")
                  ? c(e, e.get(t[n]), r)
                  : n.endsWith("Ids") &&
                    t[n].forEach(function (t) {
                      c(e, e.get(t), r);
                    });
              }));
          }
        },
        {},
      ],
      12: [
        function (e, t, r) {
          "use strict";
          var n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            i = {};
          (i.generateIdentifier = function () {
            return Math.random().toString(36).substr(2, 10);
          }),
            (i.localCName = i.generateIdentifier()),
            (i.splitLines = function (e) {
              return e
                .trim()
                .split("\n")
                .map(function (e) {
                  return e.trim();
                });
            }),
            (i.splitSections = function (e) {
              return e.split("\nm=").map(function (e, t) {
                return (t > 0 ? "m=" + e : e).trim() + "\r\n";
              });
            }),
            (i.getDescription = function (e) {
              var t = i.splitSections(e);
              return t && t[0];
            }),
            (i.getMediaSections = function (e) {
              var t = i.splitSections(e);
              return t.shift(), t;
            }),
            (i.matchPrefix = function (e, t) {
              return i.splitLines(e).filter(function (e) {
                return 0 === e.indexOf(t);
              });
            }),
            (i.parseCandidate = function (e) {
              for (
                var t = void 0,
                  r = {
                    foundation: (t =
                      0 === e.indexOf("a=candidate:")
                        ? e.substring(12).split(" ")
                        : e.substring(10).split(" "))[0],
                    component: { 1: "rtp", 2: "rtcp" }[t[1]] || t[1],
                    protocol: t[2].toLowerCase(),
                    priority: parseInt(t[3], 10),
                    ip: t[4],
                    address: t[4],
                    port: parseInt(t[5], 10),
                    type: t[7],
                  },
                  n = 8;
                n < t.length;
                n += 2
              )
                switch (t[n]) {
                  case "raddr":
                    r.relatedAddress = t[n + 1];
                    break;
                  case "rport":
                    r.relatedPort = parseInt(t[n + 1], 10);
                    break;
                  case "tcptype":
                    r.tcpType = t[n + 1];
                    break;
                  case "ufrag":
                    (r.ufrag = t[n + 1]), (r.usernameFragment = t[n + 1]);
                    break;
                  default:
                    void 0 === r[t[n]] && (r[t[n]] = t[n + 1]);
                }
              return r;
            }),
            (i.writeCandidate = function (e) {
              var t = [];
              t.push(e.foundation);
              var r = e.component;
              "rtp" === r ? t.push(1) : "rtcp" === r ? t.push(2) : t.push(r),
                t.push(e.protocol.toUpperCase()),
                t.push(e.priority),
                t.push(e.address || e.ip),
                t.push(e.port);
              var n = e.type;
              return (
                t.push("typ"),
                t.push(n),
                "host" !== n &&
                  e.relatedAddress &&
                  e.relatedPort &&
                  (t.push("raddr"),
                  t.push(e.relatedAddress),
                  t.push("rport"),
                  t.push(e.relatedPort)),
                e.tcpType &&
                  "tcp" === e.protocol.toLowerCase() &&
                  (t.push("tcptype"), t.push(e.tcpType)),
                (e.usernameFragment || e.ufrag) &&
                  (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)),
                "candidate:" + t.join(" ")
              );
            }),
            (i.parseIceOptions = function (e) {
              return e.substr(14).split(" ");
            }),
            (i.parseRtpMap = function (e) {
              var t = e.substr(9).split(" "),
                r = { payloadType: parseInt(t.shift(), 10) };
              return (
                (t = t[0].split("/")),
                (r.name = t[0]),
                (r.clockRate = parseInt(t[1], 10)),
                (r.channels = 3 === t.length ? parseInt(t[2], 10) : 1),
                (r.numChannels = r.channels),
                r
              );
            }),
            (i.writeRtpMap = function (e) {
              var t = e.payloadType;
              void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
              var r = e.channels || e.numChannels || 1;
              return (
                "a=rtpmap:" +
                t +
                " " +
                e.name +
                "/" +
                e.clockRate +
                (1 !== r ? "/" + r : "") +
                "\r\n"
              );
            }),
            (i.parseExtmap = function (e) {
              var t = e.substr(9).split(" ");
              return {
                id: parseInt(t[0], 10),
                direction:
                  t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                uri: t[1],
              };
            }),
            (i.writeExtmap = function (e) {
              return (
                "a=extmap:" +
                (e.id || e.preferredId) +
                (e.direction && "sendrecv" !== e.direction
                  ? "/" + e.direction
                  : "") +
                " " +
                e.uri +
                "\r\n"
              );
            }),
            (i.parseFmtp = function (e) {
              for (
                var t = {},
                  r = void 0,
                  n = e.substr(e.indexOf(" ") + 1).split(";"),
                  i = 0;
                i < n.length;
                i++
              )
                t[(r = n[i].trim().split("="))[0].trim()] = r[1];
              return t;
            }),
            (i.writeFmtp = function (e) {
              var t = "",
                r = e.payloadType;
              if (
                (void 0 !== e.preferredPayloadType &&
                  (r = e.preferredPayloadType),
                e.parameters && Object.keys(e.parameters).length)
              ) {
                var n = [];
                Object.keys(e.parameters).forEach(function (t) {
                  void 0 !== e.parameters[t]
                    ? n.push(t + "=" + e.parameters[t])
                    : n.push(t);
                }),
                  (t += "a=fmtp:" + r + " " + n.join(";") + "\r\n");
              }
              return t;
            }),
            (i.parseRtcpFb = function (e) {
              var t = e.substr(e.indexOf(" ") + 1).split(" ");
              return { type: t.shift(), parameter: t.join(" ") };
            }),
            (i.writeRtcpFb = function (e) {
              var t = "",
                r = e.payloadType;
              return (
                void 0 !== e.preferredPayloadType &&
                  (r = e.preferredPayloadType),
                e.rtcpFeedback &&
                  e.rtcpFeedback.length &&
                  e.rtcpFeedback.forEach(function (e) {
                    t +=
                      "a=rtcp-fb:" +
                      r +
                      " " +
                      e.type +
                      (e.parameter && e.parameter.length
                        ? " " + e.parameter
                        : "") +
                      "\r\n";
                  }),
                t
              );
            }),
            (i.parseSsrcMedia = function (e) {
              var t = e.indexOf(" "),
                r = { ssrc: parseInt(e.substr(7, t - 7), 10) },
                n = e.indexOf(":", t);
              return (
                n > -1
                  ? ((r.attribute = e.substr(t + 1, n - t - 1)),
                    (r.value = e.substr(n + 1)))
                  : (r.attribute = e.substr(t + 1)),
                r
              );
            }),
            (i.parseSsrcGroup = function (e) {
              var t = e.substr(13).split(" ");
              return {
                semantics: t.shift(),
                ssrcs: t.map(function (e) {
                  return parseInt(e, 10);
                }),
              };
            }),
            (i.getMid = function (e) {
              var t = i.matchPrefix(e, "a=mid:")[0];
              if (t) return t.substr(6);
            }),
            (i.parseFingerprint = function (e) {
              var t = e.substr(14).split(" ");
              return {
                algorithm: t[0].toLowerCase(),
                value: t[1].toUpperCase(),
              };
            }),
            (i.getDtlsParameters = function (e, t) {
              return {
                role: "auto",
                fingerprints: i
                  .matchPrefix(e + t, "a=fingerprint:")
                  .map(i.parseFingerprint),
              };
            }),
            (i.writeDtlsParameters = function (e, t) {
              var r = "a=setup:" + t + "\r\n";
              return (
                e.fingerprints.forEach(function (e) {
                  r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
                }),
                r
              );
            }),
            (i.parseCryptoLine = function (e) {
              var t = e.substr(9).split(" ");
              return {
                tag: parseInt(t[0], 10),
                cryptoSuite: t[1],
                keyParams: t[2],
                sessionParams: t.slice(3),
              };
            }),
            (i.writeCryptoLine = function (e) {
              return (
                "a=crypto:" +
                e.tag +
                " " +
                e.cryptoSuite +
                " " +
                ("object" === n(e.keyParams)
                  ? i.writeCryptoKeyParams(e.keyParams)
                  : e.keyParams) +
                (e.sessionParams ? " " + e.sessionParams.join(" ") : "") +
                "\r\n"
              );
            }),
            (i.parseCryptoKeyParams = function (e) {
              if (0 !== e.indexOf("inline:")) return null;
              var t = e.substr(7).split("|");
              return {
                keyMethod: "inline",
                keySalt: t[0],
                lifeTime: t[1],
                mkiValue: t[2] ? t[2].split(":")[0] : void 0,
                mkiLength: t[2] ? t[2].split(":")[1] : void 0,
              };
            }),
            (i.writeCryptoKeyParams = function (e) {
              return (
                e.keyMethod +
                ":" +
                e.keySalt +
                (e.lifeTime ? "|" + e.lifeTime : "") +
                (e.mkiValue && e.mkiLength
                  ? "|" + e.mkiValue + ":" + e.mkiLength
                  : "")
              );
            }),
            (i.getCryptoParameters = function (e, t) {
              return i.matchPrefix(e + t, "a=crypto:").map(i.parseCryptoLine);
            }),
            (i.getIceParameters = function (e, t) {
              var r = i.matchPrefix(e + t, "a=ice-ufrag:")[0],
                n = i.matchPrefix(e + t, "a=ice-pwd:")[0];
              return r && n
                ? { usernameFragment: r.substr(12), password: n.substr(10) }
                : null;
            }),
            (i.writeIceParameters = function (e) {
              var t =
                "a=ice-ufrag:" +
                e.usernameFragment +
                "\r\na=ice-pwd:" +
                e.password +
                "\r\n";
              return e.iceLite && (t += "a=ice-lite\r\n"), t;
            }),
            (i.parseRtpParameters = function (e) {
              for (
                var t = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: [],
                    rtcp: [],
                  },
                  r = i.splitLines(e)[0].split(" "),
                  n = 3;
                n < r.length;
                n++
              ) {
                var o = r[n],
                  a = i.matchPrefix(e, "a=rtpmap:" + o + " ")[0];
                if (a) {
                  var s = i.parseRtpMap(a),
                    c = i.matchPrefix(e, "a=fmtp:" + o + " ");
                  switch (
                    ((s.parameters = c.length ? i.parseFmtp(c[0]) : {}),
                    (s.rtcpFeedback = i
                      .matchPrefix(e, "a=rtcp-fb:" + o + " ")
                      .map(i.parseRtcpFb)),
                    t.codecs.push(s),
                    s.name.toUpperCase())
                  ) {
                    case "RED":
                    case "ULPFEC":
                      t.fecMechanisms.push(s.name.toUpperCase());
                  }
                }
              }
              return (
                i.matchPrefix(e, "a=extmap:").forEach(function (e) {
                  t.headerExtensions.push(i.parseExtmap(e));
                }),
                t
              );
            }),
            (i.writeRtpDescription = function (e, t) {
              var r = "";
              (r += "m=" + e + " "),
                (r += t.codecs.length > 0 ? "9" : "0"),
                (r += " UDP/TLS/RTP/SAVPF "),
                (r +=
                  t.codecs
                    .map(function (e) {
                      return void 0 !== e.preferredPayloadType
                        ? e.preferredPayloadType
                        : e.payloadType;
                    })
                    .join(" ") + "\r\n"),
                (r += "c=IN IP4 0.0.0.0\r\n"),
                (r += "a=rtcp:9 IN IP4 0.0.0.0\r\n"),
                t.codecs.forEach(function (e) {
                  (r += i.writeRtpMap(e)),
                    (r += i.writeFmtp(e)),
                    (r += i.writeRtcpFb(e));
                });
              var n = 0;
              return (
                t.codecs.forEach(function (e) {
                  e.maxptime > n && (n = e.maxptime);
                }),
                n > 0 && (r += "a=maxptime:" + n + "\r\n"),
                t.headerExtensions &&
                  t.headerExtensions.forEach(function (e) {
                    r += i.writeExtmap(e);
                  }),
                r
              );
            }),
            (i.parseRtpEncodingParameters = function (e) {
              var t = [],
                r = i.parseRtpParameters(e),
                n = -1 !== r.fecMechanisms.indexOf("RED"),
                o = -1 !== r.fecMechanisms.indexOf("ULPFEC"),
                a = i
                  .matchPrefix(e, "a=ssrc:")
                  .map(function (e) {
                    return i.parseSsrcMedia(e);
                  })
                  .filter(function (e) {
                    return "cname" === e.attribute;
                  }),
                s = a.length > 0 && a[0].ssrc,
                c = void 0,
                p = i.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
                  return e
                    .substr(17)
                    .split(" ")
                    .map(function (e) {
                      return parseInt(e, 10);
                    });
                });
              p.length > 0 && p[0].length > 1 && p[0][0] === s && (c = p[0][1]),
                r.codecs.forEach(function (e) {
                  if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                    var r = {
                      ssrc: s,
                      codecPayloadType: parseInt(e.parameters.apt, 10),
                    };
                    s && c && (r.rtx = { ssrc: c }),
                      t.push(r),
                      n &&
                        (((r = JSON.parse(JSON.stringify(r))).fec = {
                          ssrc: s,
                          mechanism: o ? "red+ulpfec" : "red",
                        }),
                        t.push(r));
                  }
                }),
                0 === t.length && s && t.push({ ssrc: s });
              var d = i.matchPrefix(e, "b=");
              return (
                d.length &&
                  ((d =
                    0 === d[0].indexOf("b=TIAS:")
                      ? parseInt(d[0].substr(7), 10)
                      : 0 === d[0].indexOf("b=AS:")
                      ? 950 * parseInt(d[0].substr(5), 10) - 16e3
                      : void 0),
                  t.forEach(function (e) {
                    e.maxBitrate = d;
                  })),
                t
              );
            }),
            (i.parseRtcpParameters = function (e) {
              var t = {},
                r = i
                  .matchPrefix(e, "a=ssrc:")
                  .map(function (e) {
                    return i.parseSsrcMedia(e);
                  })
                  .filter(function (e) {
                    return "cname" === e.attribute;
                  })[0];
              r && ((t.cname = r.value), (t.ssrc = r.ssrc));
              var n = i.matchPrefix(e, "a=rtcp-rsize");
              (t.reducedSize = n.length > 0), (t.compound = 0 === n.length);
              var o = i.matchPrefix(e, "a=rtcp-mux");
              return (t.mux = o.length > 0), t;
            }),
            (i.writeRtcpParameters = function (e) {
              var t = "";
              return (
                e.reducedSize && (t += "a=rtcp-rsize\r\n"),
                e.mux && (t += "a=rtcp-mux\r\n"),
                void 0 !== e.ssrc &&
                  e.cname &&
                  (t += "a=ssrc:" + e.ssrc + " cname:" + e.cname + "\r\n"),
                t
              );
            }),
            (i.parseMsid = function (e) {
              var t = void 0,
                r = i.matchPrefix(e, "a=msid:");
              if (1 === r.length)
                return {
                  stream: (t = r[0].substr(7).split(" "))[0],
                  track: t[1],
                };
              var n = i
                .matchPrefix(e, "a=ssrc:")
                .map(function (e) {
                  return i.parseSsrcMedia(e);
                })
                .filter(function (e) {
                  return "msid" === e.attribute;
                });
              if (n.length > 0)
                return { stream: (t = n[0].value.split(" "))[0], track: t[1] };
            }),
            (i.parseSctpDescription = function (e) {
              var t = i.parseMLine(e),
                r = i.matchPrefix(e, "a=max-message-size:"),
                n = void 0;
              r.length > 0 && (n = parseInt(r[0].substr(19), 10)),
                isNaN(n) && (n = 65536);
              var o = i.matchPrefix(e, "a=sctp-port:");
              if (o.length > 0)
                return {
                  port: parseInt(o[0].substr(12), 10),
                  protocol: t.fmt,
                  maxMessageSize: n,
                };
              var a = i.matchPrefix(e, "a=sctpmap:");
              if (a.length > 0) {
                var s = a[0].substr(10).split(" ");
                return {
                  port: parseInt(s[0], 10),
                  protocol: s[1],
                  maxMessageSize: n,
                };
              }
            }),
            (i.writeSctpDescription = function (e, t) {
              var r = [];
              return (
                (r =
                  "DTLS/SCTP" !== e.protocol
                    ? [
                        "m=" +
                          e.kind +
                          " 9 " +
                          e.protocol +
                          " " +
                          t.protocol +
                          "\r\n",
                        "c=IN IP4 0.0.0.0\r\n",
                        "a=sctp-port:" + t.port + "\r\n",
                      ]
                    : [
                        "m=" +
                          e.kind +
                          " 9 " +
                          e.protocol +
                          " " +
                          t.port +
                          "\r\n",
                        "c=IN IP4 0.0.0.0\r\n",
                        "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n",
                      ]),
                void 0 !== t.maxMessageSize &&
                  r.push("a=max-message-size:" + t.maxMessageSize + "\r\n"),
                r.join("")
              );
            }),
            (i.generateSessionId = function () {
              return Math.random().toString().substr(2, 21);
            }),
            (i.writeSessionBoilerplate = function (e, t, r) {
              var n = void 0;
              return (
                "v=0\r\no=" +
                (r || "thisisadapterortc") +
                " " +
                (n = e || i.generateSessionId()) +
                " " +
                (void 0 !== t ? t : 2) +
                " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
              );
            }),
            (i.getDirection = function (e, t) {
              for (var r = i.splitLines(e), n = 0; n < r.length; n++)
                switch (r[n]) {
                  case "a=sendrecv":
                  case "a=sendonly":
                  case "a=recvonly":
                  case "a=inactive":
                    return r[n].substr(2);
                }
              return t ? i.getDirection(t) : "sendrecv";
            }),
            (i.getKind = function (e) {
              return i.splitLines(e)[0].split(" ")[0].substr(2);
            }),
            (i.isRejected = function (e) {
              return "0" === e.split(" ", 2)[1];
            }),
            (i.parseMLine = function (e) {
              var t = i.splitLines(e)[0].substr(2).split(" ");
              return {
                kind: t[0],
                port: parseInt(t[1], 10),
                protocol: t[2],
                fmt: t.slice(3).join(" "),
              };
            }),
            (i.parseOLine = function (e) {
              var t = i.matchPrefix(e, "o=")[0].substr(2).split(" ");
              return {
                username: t[0],
                sessionId: t[1],
                sessionVersion: parseInt(t[2], 10),
                netType: t[3],
                addressType: t[4],
                address: t[5],
              };
            }),
            (i.isValidSDP = function (e) {
              if ("string" != typeof e || 0 === e.length) return !1;
              for (var t = i.splitLines(e), r = 0; r < t.length; r++)
                if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
              return !0;
            }),
            (void 0 === t ? "undefined" : n(t)) === "object" && (t.exports = i);
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});
