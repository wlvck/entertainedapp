<template>
  <div
    class="max-w-[610px] min-h-[300px] w-full mx-auto rounded-[8px] overflow-hidden bg-black-100"
  >
    <div class="keyboard">
      <div class="black-btn">
        <div>`</div>
      </div>
      <div class="black-btn">
        <div>1</div>
      </div>
      <div class="black-btn">
        <div>2</div>
      </div>
      <div class="black-btn">
        <div>3</div>
      </div>
      <div class="black-btn">
        <div>4</div>
      </div>
      <div class="black-btn">
        <div>5</div>
      </div>
      <div class="black-btn">
        <div>6</div>
      </div>
      <div class="black-btn">
        <div>7</div>
      </div>
      <div class="black-btn">
        <div>8</div>
      </div>
      <div class="black-btn">
        <div>9</div>
      </div>
      <div class="black-btn">
        <div>0</div>
      </div>
      <div class="black-btn">
        <div>-</div>
      </div>
      <div class="black-btn">
        <div>=</div>
      </div>
      <div class="black-btn backspace to-right">
        <div>delete</div>
      </div>
      <div class="tab black-btn">
        <div>tab</div>
      </div>
      <div class="black-btn accent">
        <div>q</div>
      </div>
      <div class="black-btn accent">
        <div>w</div>
      </div>
      <div class="black-btn accent">
        <div>e</div>
      </div>
      <div class="black-btn accent">
        <div>r</div>
      </div>
      <div class="black-btn accent">
        <div>t</div>
      </div>
      <div class="black-btn accent">
        <div>y</div>
      </div>
      <div class="black-btn accent">
        <div>u</div>
      </div>
      <div class="black-btn accent">
        <div>i</div>
      </div>
      <div class="black-btn accent">
        <div>o</div>
      </div>
      <div class="black-btn accent">
        <div>p</div>
      </div>
      <div class="black-btn accent">
        <div>[</div>
      </div>
      <div class="black-btn accent">
        <div>]</div>
      </div>
      <div class="backslash black-btn accent">
        <div>\</div>
      </div>
      <div class="caps black-btn">
        <div>caps lock</div>
      </div>
      <div class="black-btn accent">
        <div>a</div>
      </div>
      <div class="black-btn accent">
        <div>s</div>
      </div>
      <div class="black-btn accent">
        <div>d</div>
      </div>
      <div class="black-btn accent">
        <div>f</div>
      </div>
      <div class="black-btn accent">
        <div>g</div>
      </div>
      <div class="black-btn accent">
        <div>h</div>
      </div>
      <div class="black-btn accent">
        <div>j</div>
      </div>
      <div class="black-btn accent">
        <div>k</div>
      </div>
      <div class="black-btn accent">
        <div>l</div>
      </div>
      <div class="black-btn accent">
        <div>;</div>
      </div>
      <div class="black-btn accent">
        <div>'</div>
      </div>
      <div class="enter black-btn">
        <div>return</div>
      </div>
      <div class="shift to-left black-btn">
        <div>shift</div>
      </div>
      <div class="black-btn accent">
        <div>z</div>
      </div>
      <div class="black-btn accent">
        <div>x</div>
      </div>
      <div class="black-btn accent">
        <div>c</div>
      </div>
      <div class="black-btn accent">
        <div>v</div>
      </div>
      <div class="black-btn accent">
        <div>b</div>
      </div>
      <div class="black-btn accent">
        <div>n</div>
      </div>
      <div class="black-btn accent">
        <div>m</div>
      </div>
      <div class="black-btn accent">
        <div>,</div>
      </div>
      <div class="black-btn accent">
        <div>.</div>
      </div>
      <div class="black-btn accent">
        <div>/</div>
      </div>
      <div class="shift to-right black-btn">
        <div>shift</div>
      </div>
      <div class="fn black-btn">
        <div>fn</div>
      </div>
      <div class="ctrl black-btn">
        <div>ctrl</div>
      </div>
      <div class="alt black-btn">
        <div>alt</div>
      </div>
      <div class="command black-btn">
        <div>
          <icon name="icon:command" size="13" class="mx-auto mt-1" />
        </div>
      </div>
      <div class="space black-btn">
        <div />
      </div>
      <div class="command black-btn">
        <div>
          <icon name="icon:command" size="13" class="mx-auto mt-1" />
        </div>
      </div>
      <div class="alt black-btn">
        <div>alt</div>
      </div>
      <div class="arrow-left black-btn">
        <div>
          <icon name="icon:arrow-left" size="20" />
        </div>
      </div>
      <div class="black-btn arrow-up">
        <div>
          <icon name="icon:arrow-up" size="20" />
        </div>
      </div>
      <div class="black-btn arrow-down">
        <div>
          <icon name="icon:arrow-down" size="20" />
        </div>
      </div>
      <div class="arrow-right black-btn">
        <div>
          <icon name="icon:arrow-right" size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style>
.keyboard {
  padding: 2px;
  border: hsl(from #15161e h s calc(l - 3));
  display: grid;
  grid-template-columns: repeat(58, 1fr);
  background-color: hsl(from #15161e h s calc(l - 3));
  grid-template-rows: repeat(10, 1fr);
  border-radius: 8px;
  margin-top: 30px;

  .black-btn {
    background: transparent;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    padding: 2px;
    touch-action: manipulation;
    vertical-align: middle;
    overflow: hidden;
    grid-column-end: span 4;
    grid-row-end: span 2;
    grid-gap: 0;
    margin-bottom: 0;
    cursor: pointer;

    &:active {
      transform: scale(0.98);
    }

    div {
      color: hsl(from #9aa5ce h s calc(l + 10));
      padding: 12px 0;
      background-color: hsl(
        from hsl(from #15161e h s calc(l - 3)) h s calc(l + 7)
      );
      padding-top: calc(0.75rem - 2px / 2);
      transition-duration: 0.1s;
      transition-property: background-color;
      text-align: center;
      transition-timing-function: ease-in-out;
      overflow: hidden;
      position: relative;
      font-weight: 600;
      border-radius: 4px;
      vertical-align: middle;
      height: calc(1.25rem + 0.75rem * 2);
      line-height: calc(1rem * 1.125 * 1);
      font-size: calc(1rem * 1.125 * 1);
      box-shadow:
        inset 0 calc(-1 * 2px) 0
          hsl(
            from hsl(from #15161e h s calc(l - 3)) calc(h - 5) s calc(l + 37) /
              0.15
          ),
        0 2px 2px
          hsl(
            from hsl(from #15161e h s calc(l - 3)) calc(h - 5) s calc(l + 37) /
              0.15
          );
    }
  }

  .accent div {
    background-color: #25273c;
  }

  .space {
    grid-column-end: span 20;
  }

  .alt {
    grid-column-end: span 4;
    div {
      font-size: 0.75rem !important;
    }
  }

  .command {
    grid-column-end: span 5;
    div {
      font-size: 0.75rem !important;
    }
  }

  .ctrl {
    grid-column-end: span 4;

    div {
      font-size: 0.75rem !important;
    }
  }

  .fn {
    div {
      font-size: 0.75rem !important;
    }
  }

  .shift {
    grid-column-end: span 9;
    div {
      font-size: 0.75rem !important;
    }
  }

  .enter,
  .caps {
    grid-column-end: span 7;

    div {
      font-size: 0.75rem !important;
      padding-top: 8px;
    }
  }

  .backslash {
    grid-column-end: span 4;
  }

  .tab {
    grid-column-end: span 6;
    div {
      text-align: left;
      font-size: 0.75rem !important;
      padding-top: 8px;
      padding-left: 8px;
    }
  }

  .to-right {
    div {
      text-align: right;
      padding-left: 0;
      padding-right: 8px;
    }
  }

  .to-left {
    div {
      text-align: left;
      padding-left: 8px;
      padding-right: 0;
    }
  }

  .backspace {
    grid-column-end: span 6;

    div {
      font-size: 0.75rem !important;
      padding-top: 8px;
    }
  }

  .caps div {
    text-align: left;
    padding-left: 8px;
    font-size: 0.75rem !important;
  }

  .enter div {
    text-align: right;
    padding-right: 8px;
  }

  .arrow-up,
  .arrow-down {
    grid-column-start: 51;
    grid-column-end: 55;
    div {
      display: grid;
      place-content: center;
      height: calc(1.5rem - 4px);
      padding: 0;
    }
  }

  .arrow-up {
    grid-row-start: 9;
    grid-row-end: 10;
  }

  .arrow-down {
    grid-row-start: 10;
    grid-row-end: 11;
  }

  .arrow-left,
  .arrow-right {
    div {
      display: grid;
      place-content: center;
    }
  }

  .bump div {
    background-color: #9ece6a82 !important;
  }
}
</style>
