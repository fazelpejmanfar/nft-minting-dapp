import { createGlobalStyle } from 'styled-components'
import RenoMono from './fonts/RenoMono.otf'
import Upheaval from './fonts/upheavtt.ttf';
// import Gumball from './Gumball.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Upheaval';
        src: url(${Upheaval}) format('truetype');
    }

    @font-face {
        font-family: 'Renomono';
        src: url(${RenoMono}) format('opentype');
    }
`;

// export const Renomono = createGlobalStyle`
//     @font-face {
//         font-family: 'Renomono';
//         src: url(${RenoMono}) format('opentype');
//     }
// `;

export default GlobalStyle;