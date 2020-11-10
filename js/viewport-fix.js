class VVP {
  constructor(opts={}) {
    this.window_resize_throttle_in_ms = opts.window_resize_throttle_in_ms || 150;
    this.auto_refresh_throttle_in_ms = opts.auto_refresh_throttle_in_ms || 300;
    this.debounceQueue = {};
    this.enabled = typeof(window.visualViewport) === "object";
    if (!this.enabled) {
      console.error("Visual Viewport is not available in this browser.");
    }
    this.vvp = {width: 0, height: 0}
    this.create_style_element();
    this.refresh();

    window.visualViewport.addEventListener('resize', () => {
      this.refresh();
    });
  }

  refresh() {
    return this.calculate_viewport.then(this.set_viewport()).catch((e) => console.error(e));
  }

  create_style_element() {
    const style_tag = document.createElement("style");
    style_tag.id = "viewport_fix_variables";
    return document.head.prepend(style_tag);
  }

  get style_element() {
    return document.getElementById("viewport_fix_variables");
  }

  set_viewport() {
    return this.style_element.innerHTML = `
      :root {
        --100vvw: ${this.vvp.width}px;
        --100vvh: ${this.vvp.height}px;
      }
    `;
  }

  get calculate_viewport() {
    return new Promise((resolve, reject) => {
      if (!this.enabled) { return reject("Could not calculate window.visualViewport"); }
      this.vvp.width  = window.visualViewport.width;
      this.vvp.height = window.visualViewport.height;
      return resolve();
    })
  }

  debounce(fn, args) {
      args = args || [];
      if (typeof this.debounceQueue["viewport"] !== "object") {
      this.debounceQueue["viewport"] = {};
    }
    if (typeof this.debounceQueue["viewport"].debounceTimer !== "undefined") {
      clearTimeout(this.debounceQueue["viewport"].debounceTimer);
    }
    return this.debounceQueue["viewport"] = {
      fn: fn,
      id: "viewport",
      delay: this.refresh_rate_in_milliseconds,
      args: args,
      debounceTimer: setTimeout(function() {
        this.debounceQueue["viewport"].fn.apply(this, this.debounceQueue["viewport"].args);
        return this.debounceQueue["viewport"] = void 0;
      }, this.refresh_rate_in_milliseconds)
    };
  }
}