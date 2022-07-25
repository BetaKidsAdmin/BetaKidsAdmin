const DEVTOOLS_RTT_ADJUSTMENT_FACTOR = 3.75;
const DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR = 0.9;

const throttling = {
  // These values partially align with WebPageTest's definition of "LTE".
  // https://github.com/WPO-Foundation/webpagetest/blob/master/www/settings/connectivity.ini.sample
  mobileLTE: {
    rttMs: 70,
    throughputKbps: 12 * 1024,
    requestLatencyMs: 70 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
    downloadThroughputKbps: 12 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    uploadThroughputKbps: 12 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    cpuSlowdownMultiplier: 2
  },
  // These values partially align with WebPageTest's definition of "FIOS".
  desktopFIOS: {
    rttMs: 4,
    throughputKbps: 20 * 1024,
    cpuSlowdownMultiplier: 1,
    requestLatencyMs: 4 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
    downloadThroughputKbps: 20 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    uploadThroughputKbps: 5 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR
  }
};

const IPHONE_EMULATION_METRICS = {
  mobile: true,
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  disabled: false
};

const DESKTOP_EMULATION_METRICS = {
  mobile: false,
  width: 1350,
  height: 940,
  deviceScaleFactor: 1,
  disabled: false
};

const screenEmulationMetrics = {
  mobile: IPHONE_EMULATION_METRICS,
  desktop: DESKTOP_EMULATION_METRICS
};

const MOTOG4_USERAGENT =
  'Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4420.0 Mobile Safari/537.36 Chrome-Lighthouse';
const DESKTOP_USERAGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4420.0 Safari/537.36 Chrome-Lighthouse';

const userAgents = {
  mobile: MOTOG4_USERAGENT,
  desktop: DESKTOP_USERAGENT
};

module.exports = {
  throttling,
  screenEmulationMetrics,
  userAgents
};
