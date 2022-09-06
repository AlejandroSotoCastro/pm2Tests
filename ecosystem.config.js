module.exports = {
  apps: [
    {
      name: "app",
      script: "./index.js",
      env: {
        XILL4_PACKAGED: process.env.XILL4_PACKAGED || false,
        XILL4_LICENSE_KEY: process.env.XILL4_LICENSE_KEY,
      },
      watch: ["./index.js"],
      watch_delay: 1000,

      merge_logs: true,
      out_file: "/dev/null",
      error_file: "/dev/null",
      log_file: "/dev/null",
      instances: "1",
      exec_mode: "cluster",
    },
    {
      name: "app2",
      script: "./index2.js",

      watch: ["./index2.js"],
      watch_delay: 1000,

      merge_logs: true,
      out_file: "/dev/null",
      error_file: "/dev/null",
      log_file: "/dev/null",
      instances: "1",
      exec_mode: "cluster",
    },
  ],
};
