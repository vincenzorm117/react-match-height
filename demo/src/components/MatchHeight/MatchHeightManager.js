import throttle from "lodash/throttle";

export default class MatchHeightManager {
  constructor() {
    this.elements = {};

    this.listener = throttle(this.updateAllHeights.bind(this), 300);
    window.addEventListener("resize", this.listener);
  }

  getMaxHeight(channel) {
    const heights = this.elements[channel].map((e) =>
      Math.max(e.offsetHeight, e.scrollHeight)
    );
    return Math.max.apply(null, heights);
  }

  updateHeights(channel) {
    const maxHeight = this.getMaxHeight(channel);
    for (const el of this.elements[channel]) {
      el.style.height = `${maxHeight}px`;
    }
  }

  resetHeights(channel) {
    for (const el of this.elements[channel]) {
      el.style.height = ``;
    }
  }

  updateAllHeights() {
    for (const channel of Object.keys(this.elements)) {
      this.resetHeights(channel);
      this.updateHeights(channel);
    }
  }

  register(channel, element) {
    if (!Array.isArray(this.elements[channel])) {
      this.elements[channel] = [];
    }
    this.elements[channel].push(element);
  }

  deregister(channel, element) {
    if (Array.isArray(this.elements[channel])) {
      this.elements[channel] = this.elements[channel].filter(
        (e) => e !== element
      );
    }
  }

  destroy() {
    window.removeEventListener("resize", this.listener);
  }
}
