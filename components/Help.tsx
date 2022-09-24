export default function Help() {
  const helps = [
    { opt: "-?,-h", mean: "nginx help" },
    { opt: "-v", mean: "show version and exit" },
    { opt: "-V", mean: "show version and configure options then exit" },
    { opt: "-t", mean: "test configuration and exit" },
    { opt: "-T", mean: "test configuration, dump it and exit" },
    { opt: "-q", mean: "suppress non-error messages during configuration testing" },
    { opt: "-s signal", mean: "send signal to a master process: stop, quit, reopen, reload" },
    { opt: "-p prefix", mean: "set prefix path (default: /etc/nginx/)" },
    { opt: "-e filename", mean: "set error log file (default: /var/log/nginx/error.log)" },
    { opt: "-c filename", mean: "set configuration file (default: /etc/nginx/nginx.conf)" },
    { opt: "-g directives", mean: "set global directives out of configuration file" }
  ];
  return (
    <div class="nginx-help text-white fixed right-10 bottom-10">
      <span
        class="iconify text-2xl cursor-pointer"
        data-icon="material-symbols:help-rounded"
      >
      </span>
      <ul class="absolute right-0 bottom-10 nginx-help-ctn">
        <span>Terminal Command Options</span>
        {helps.map((item) => {
          return (
            <li>
              <span class="inline-block w-28">{item.opt}</span>
              <span>{item.mean}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
