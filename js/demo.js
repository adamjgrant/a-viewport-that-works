const viewport = document.getElementById("viewport");

const inputbox = document.createElement("input");
inputbox.placeholder = "Test viewport logic by tapping here on mobile";
inputbox.type = "text";
inputbox.className = "demo";
viewport.appendChild(inputbox);

const viewport_readout = document.createElement("p");
viewport_readout.id = "viewport_readout";
viewport.appendChild(viewport_readout);
const viewport_readout_element = document.getElementById("viewport_readout");
const display_viewport_info = () => {
  return;
  const vvp = window.visualViewport;
  const vp = { width: document.body.clientWidth, height: document.body.clientHeight };
  viewport_readout_element.innerHTML = `
    Visual Viewport: ${vvp.width}x${vvp.height}
    <br>
    Actual Viewport: ${vp.width}x${vp.height}
  `;
};
display_viewport_info();
window.setInterval(display_viewport_info, 2000);