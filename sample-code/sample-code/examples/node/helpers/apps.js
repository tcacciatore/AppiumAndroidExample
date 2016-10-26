if (process.env.DEV) {
  exports.androidApiDemos = "sample-code/apps/ApiDemos/bin/ApiDemos-debug.apk";
  exports.selendroidTestApp = "sample-code/apps/selendroid-test-app.apk";
  exports.androidTestApp = "http://127.0.0.1:8080/app-debug.apk";
} else {
  exports.androidApiDemos = "http://appium.github.io/appium/assets/ApiDemos-debug.apk";
  exports.selendroidTestApp = "http://appium.github.io/appium/assets/selendroid-test-app-0.10.0.apk";
  exports.androidTestApp = "http://127.0.0.1:8080/app-debug.apk";

  exports.iosWebviewAppLocal = "http://localhost:3000/WebViewApp7.1.app.zip";
  exports.androidApiDemosLocal = "http://localhost:3000/ApiDemos-debug.apk";
}
