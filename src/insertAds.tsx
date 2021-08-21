import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const document = ExecutionEnvironment.canUseDOM ? window.document : undefined;

if (document !== undefined) {
  const ins = document.createElement("ins");
  ins["className"] = "adsbygoogle";
  ins.setAttribute("style", "display: block");
  ins.setAttribute("data-ad-client", "ca-pub-5037854579642309");
  ins.setAttribute("data-ad-slot", "6200648204");
  ins.setAttribute("data-ad-format", "auto");
  ins.setAttribute("data-full-width-responsive", "true");

  setTimeout(() => {
    document.querySelector("header")?.appendChild(ins);
  }, 1000);
}
