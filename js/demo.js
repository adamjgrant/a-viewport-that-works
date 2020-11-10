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
  const vvp = window.visualViewport;
  const vp = { width: window.innerWidth, height: window.innerHeight };
  viewport_readout_element.innerHTML = `
    <h3>Refreshes every two seconds</h3>
    <p>Visual Viewport: ${vvp.width}x${vvp.height}
    <br>
    Actual Viewport: ${vp.width}x${vp.height}</p>
  `;
};
display_viewport_info();
window.setInterval(display_viewport_info, 2000);

const partial_viewport = document.createElement("div");
partial_viewport.id = "partial_viewport";
partial_viewport.className = "partial_viewport";
partial_viewport.innerHTML = "20% VVH & VVW"
viewport.appendChild(partial_viewport);
