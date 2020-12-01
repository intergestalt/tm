<style global>
  @font-face { 
    font-family: 'GenevaRegular';
    src: url('GenevaRegular.ttf') format('truetype'); 
  }

  /*** RESET ***/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /*** GLOBAL ***/

  html, body, main {
    position: relative;
    width: 100%;
    height: 100%;
  }

  body {
    box-sizing: border-box;
    font-family: GenevaRegular, Geneva, sans-serif;
    font-size: 24px;
    line-height: 32px;
    background-color: var(--color-beige);
    color: var(--color-red);
  }

  @media (max-width: 500px) {
    body {
      font-size: 18px;
      line-height: 25px;
    }
  }

  a {
    color: var(--color-red);
  }

  h2, p {
    margin-bottom: 1.4em;
  }

  :root {
    --color-mint: #00FF94;
    --color-beige: #F0E8C6;
    --color-red: #FF3A52;
  }
</style>