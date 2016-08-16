import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
} from 'react-native-webrtc';

module.exports.RTCSessionDescription = RTCSessionDescription || window.RTCSessionDescription ||
	window.mozRTCSessionDescription;
module.exports.RTCPeerConnection = RTCPeerConnection || window.RTCPeerConnection ||
	window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
module.exports.RTCIceCandidate = RTCIceCandidate || window.RTCIceCandidate ||
	window.mozRTCIceCandidate;
