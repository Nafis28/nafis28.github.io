<script>
  anime({
    targets: '.animated-text span',
    translateY: [
      { value: '-2.75rem', easing: 'easeOutExpo', duration: 600 },
      { value: 0, easing: 'easeOutBounce', duration: 800, delay: 100 }
    ],
    rotate: {
      value: '-1turn',
      delay: 0
    },
    delay: (el, i) => i * 50,
    loop: true,
    loopDelay: 1000,
    easing: 'easeInOutCirc'
  });
</script>
