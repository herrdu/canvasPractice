class CanvasPanel {
  $el: HTMLElement;
  constructor(domStr: string) {
    this.$el = <HTMLDivElement>document.querySelector(domStr);
  }

  init() {
    let $elParentEl: HTMLElement = this.$el.parentElement;
    let parentWidth = $elParentEl.clientWidth;
    let parentHeight = $elParentEl.clientHeight;
    this.$el.style.width = parentWidth + "px";
    this.$el.style.height = parentHeight + "px";

    console.log($elParentEl, parentWidth, this.$el.style.width);
  }
}

export default CanvasPanel;
