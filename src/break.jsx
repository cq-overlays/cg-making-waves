import render from "./render"
import { Motion } from "@motionone/solid"
import gridA from "./grid_b.svg"
import gridB from "./grid_a.svg"

function App() {
  return (
    <Background>
      <FilterSvg />
      <div class="flex items-center flex-col justify-evenly h-full">
        <Window text="big spinning wave" />
        <Window text="flavor text">
          <div class="flex-1 p-4 flex-col flex items-center gap-8">
            <div class="self-start">be right back!</div>
            <div class="ui-outset text-[#153338] text-2xl font-medium font-pixel py-2 px-16 flex items-center justify-center">
              ok
            </div>
          </div>
        </Window>
        <Window text="commentators">
          <div class="flex-1 p-4 flex-col flex items-center gap-4 text-3xl font-medium">
            <div class="self-start">@Chaedr_ (they/them)</div>
            <div class="self-start">@Chaedr_ (they/them)</div>
          </div>
          <ScrollBar />
        </Window>
      </div>
    </Background>
  )
}

const Window = ({ text, children }) => (
  <div class="bg-gradient-to-r from-[#CB82B188] via-[#AEB2ED88] to-[#70B9C488] translate-x-3 translate-y-3">
    <div class="ui-outset p-2 -translate-x-3 -translate-y-3 flex flex-col gap-2">
      <div class="ui-outset-semi flex items-center justify-between font-pixel py-1 px-2.5 text-2xl font-bold bg-gradient-to-r from-[#CB82B1] via-[#AEB2ED] to-[#70B9C4]">
        <div class="flex items-center">
          <div>{/* WAVE LOGO */}</div>
          <div>{text}</div>
        </div>
        <div class="ui-outset p-2 -mr-1.5 h-8 w-8 flex items-center justify-center">
          <svg
            class="w-5"
            viewBox="0 0 8 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0H2V1H3V2H5V1H6V0H8V1H7V2H6V3H5V4H6V5H7V6H8V7H6V6H5V5H3V6H2V7H0V6H1V5H2V4H3V3H2V2H1V1H0V0Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div
        style={{ filter: "url(#noise)" }}
        class="ui-inset text-[#153338] text-5xl font-medium flex"
      >
        {children}
      </div>
    </div>
  </div>
)

const ScrollBar = () => (
  <div class="m-[2px] flex flex-col">
    <ScrollButton class="scale-y-[-1]" />
    <div class="flex-1 bg-black">
      <div class="ui-outset h-full"></div>
    </div>
    <ScrollButton />
  </div>
)

const FilterSvg = () => (
  <svg class="hidden">
    <defs>
      <filter id="noise">
        <feTurbulence
          baseFrequency="0.7,0.8"
          seed="0"
          type="fractalNoise"
          result="static"
        />
        <feDisplacementMap in="SourceGraphic" in2="static" />
      </filter>
    </defs>
  </svg>
)

const ScrollButton = (props) => (
  <div class="ui-outset p-2 h-8 w-8 flex items-center justify-center">
    <svg
      class={`w-5 ${props.class}`}
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.09827 0.126724H0.0982666V1.12672H1.09827V2.12672H2.09827V3.12672H3.09827V4.12672H4.09827V3.12672H5.09827V2.12672H6.09827V1.12672H7.09827V0.126724Z"
        fill="black"
      />
    </svg>
  </div>
)

const Background = ({ children }) => (
  <div class="relative bg-gradient-to-b from-[#11BFBB] via-[#D1CED3] to-[#f48ed0] w-[1920px] h-[1080px]">
    <div class="translate-y-[35rem]">
      <div class="absolute synth-a items-center justify-center">
        <Motion.div
          class="flex"
          animate={{ translateX: ["-25%", "25%"] }}
          transition={{ repeat: Infinity, easing: "linear", duration: 25 }}
        >
          <img src={gridA} />
          <img src={gridA} />
        </Motion.div>
      </div>
    </div>
    <div class="-translate-y-[0rem]">
      <div class="absolute synth-b items-center justify-center">
        <Motion.div
          class="flex"
          animate={{ translateX: ["25%", "-25%"] }}
          transition={{ repeat: Infinity, easing: "linear", duration: 25 }}
        >
          <img src={gridB} />
          <img src={gridB} />
        </Motion.div>
      </div>
    </div>
    <div class="absolute inset-0">{children}</div>
  </div>
)

render(App)
