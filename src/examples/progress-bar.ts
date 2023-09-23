import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div')

texto.innerHTML = ` 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis cursus in hac habitasse platea dictumst. Viverra ipsum nunc aliquet bibendum enim facilisis. Amet facilisis magna etiam tempor orci. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Hac habitasse platea dictumst quisque sagittis purus. Duis at consectetur lorem donec massa sapien faucibus. Nunc sed velit dignissim sodales ut eu. Vulputate dignissim suspendisse in est. Ultricies leo integer malesuada nunc vel. Ac turpis egestas integer eget. Enim neque volutpat ac tincidunt vitae.
<br><br/>
Nullam ac tortor vitae purus faucibus ornare suspendisse. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Ac ut consequat semper viverra nam libero. Tincidunt id aliquet risus feugiat. Justo laoreet sit amet cursus sit. Mi eget mauris pharetra et ultrices. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Neque egestas congue quisque egestas diam. Pretium fusce id velit ut tortor. Elementum eu facilisis sed odio morbi quis commodo. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Donec enim diam vulputate ut. Ac turpis egestas integer eget aliquet nibh praesent. Porttitor rhoncus dolor purus non enim. Ante metus dictum at tempor. Molestie at elementum eu facilisis.
<br><br/>
Risus at ultrices mi tempus. Nunc congue nisi vitae suscipit tellus mauris. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Leo a diam sollicitudin tempor id eu. Lacinia at quis risus sed vulputate odio. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Mi ipsum faucibus vitae aliquet nec. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Enim ut sem viverra aliquet eget. Justo eget magna fermentum iaculis eu non diam. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. In iaculis nunc sed augue lacus. Quis lectus nulla at volutpat diam. Nulla pharetra diam sit amet nisl. Leo urna molestie at elementum eu. Vitae congue mauris rhoncus aenean vel. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Enim praesent elementum facilisis leo vel fringilla est ullamcorper.
<br><br/>
Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Sed augue lacus viverra vitae congue eu consequat ac. Commodo elit at imperdiet dui accumsan sit amet. Consequat semper viverra nam libero justo. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Amet purus gravida quis blandit turpis cursus in. Pellentesque habitant morbi tristique senectus et netus et. Erat nam at lectus urna duis. Congue quisque egestas diam in arcu. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Lacus vestibulum sed arcu non odio euismod. Aliquet nec ullamcorper sit amet risus nullam eget felis.
<br><br/>
Tortor condimentum lacinia quis vel eros donec ac. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Faucibus vitae aliquet nec ullamcorper sit amet risus. Integer feugiat scelerisque varius morbi enim. Adipiscing elit pellentesque habitant morbi tristique senectus. Aliquam faucibus purus in massa tempor nec. Integer vitae justo eget magna fermentum iaculis. Scelerisque varius morbi enim nunc faucibus a pellentesque. Varius vel pharetra vel turpis nunc. Porttitor eget dolor morbi non arcu risus quis varius quam. Diam donec adipiscing tristique risus nec. Egestas dui id ornare arcu odio ut. Tempor id eu nisl nunc mi ipsum. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Tortor vitae purus faucibus ornare suspendisse sed.`

const body = document.querySelector('body')

body?.appendChild(texto)

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body?.appendChild(progressBar);


// Funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}


// Stream

const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(event => calcularPorcentajeScroll(event)),
    map(calcularPorcentajeScroll),
    tap(console.log)
)

progress$.subscribe(porcentaje => {
  progressBar.style.width = `${porcentaje}%`
})