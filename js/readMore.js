jQuery('.postPreview').readmore({
  embedCSS: false,
  afterToggle: function(trigger, element, expanded) {
    if (expanded === true) {
      element.css({
        height: "auto"
      })
    }
  }
});



