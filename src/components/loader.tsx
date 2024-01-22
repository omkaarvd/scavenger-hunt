export default function Loader() {
  return (
    <div className='absolute left-[50%] top-[20%] -translate-x-[50%]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 200 200'
        className='h-16 w-16'
      >
        <circle
          fill='none'
          strokeOpacity='1'
          stroke='#fff'
          strokeWidth='.5'
          cx='100'
          cy='100'
          r='0'
        >
          <animate
            attributeName='r'
            calcMode='spline'
            dur='2'
            values='1;80'
            keyTimes='0;1'
            keySplines='0 .2 .5 1'
            repeatCount='indefinite'
          ></animate>
          <animate
            attributeName='stroke-width'
            calcMode='spline'
            dur='2'
            values='0;25'
            keyTimes='0;1'
            keySplines='0 .2 .5 1'
            repeatCount='indefinite'
          ></animate>
          <animate
            attributeName='stroke-opacity'
            calcMode='spline'
            dur='2'
            values='1;0'
            keyTimes='0;1'
            keySplines='0 .2 .5 1'
            repeatCount='indefinite'
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
