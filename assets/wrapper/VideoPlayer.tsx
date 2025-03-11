import React from 'react';
import { Platform, View } from 'react-native';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';

const VideoPlayer = ({ source }) => {
	const isWeb = Platform.OS === 'web';

	if (isWeb) {
		return (
			<WebView
				source={{ html: '<video src="' + source.uri + '" controls></video>' }}
			/>
		);
	}

	return (
		<View>
			<Video
				source={source}
				style={{ width: 300, height: 200 }}
				resizeMode="contain"
			/>
		</View>
	);
};
