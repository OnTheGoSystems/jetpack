/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';
import { translate as __ } from 'i18n-calypso';
import Card from 'components/card';
import Button from 'components/button';
import analytics from 'lib/analytics';

/**
 * Internal dependencies
 */
import { imagePath } from 'constants/urls';

const ThemesPromoCard = React.createClass( {
	displayName: 'ThemesPromoCard',

	trackGetStarted() {
		analytics.tracks.recordJetpackClick( {
			target: 'themes-card',
			button: 'themes-get-started',
			plan: this.props.plan,
			type: 'upgrade'
		} );
	},

	trackComparePlans() {
		analytics.tracks.recordJetpackClick( {
			target: 'themes-card',
			button: 'themes-compare-all',
			plan: this.props.plan,
			type: 'upgrade'
		} );
	},

	render() {
		const classes = classNames(
				this.props.className,
				'jp-themes-card'
		);

		// Plan classes come through as `is-whatever-plan`, we need to strip off `is-` and `-plan` from the string to pass to the URL
		const plan = this.props.plan;
		const regex = /(?![is-])(.*)(?=-plan)/g;
		const urlFriendlyPlan = Array.isArray( plan.match( regex ) ) ? plan.match( regex )[ 0 ] : '';

		return (
			<div className={ classes }>
				<Card className="jp-apps-card__content">
					<div className="jp-apps-card__top">
						<svg id="customizeTheme" viewBox="0 0 1562.02 968.34"><path style={{"fill":"none"}} d="M2782.37,1785.75v304h186.89V1766.4H2801.72A19.34,19.34,0,0,0,2782.37,1785.75Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#f3f6f8"}} d="M2694.2,1577.67v-66.48H2489.65c1.43,2.42,2.76,4.91,4,7.46a97.51,97.51,0,0,1-45.91,129.77l-1.12.53-1.7.78a103.66,103.66,0,0,1-12.4,4.49l-1.95.52c-.74.19-1.49.39-2.24.57q-1.71.41-3.44.76c-2-3.57-2.59-12.67-3-17.89-.57-8.53-.89-13.23-4.33-14.63-5.44-2.19-12.54,3.41-17.3,13.66a45.49,45.49,0,0,0-4.29,20.29,97.48,97.48,0,0,1-78.41-138.84c1.22-2.55,2.55-5,4-7.46H2109.11v345.3c30.68.61,91.09-10.69,91.91,17.83V1771.63h395.1V1893.7c31.53-.25,63.17,7.34,94.57,2.12a2.54,2.54,0,0,1,3,1.87c3.06,18.42,15.24,184.72,16.49,201.18,1.13,15,3.61,29.66.47,44.63a2.57,2.57,0,0,1-2.49,1.75c-11.26.59-22.59,2.08-33.86,2-10.57,0-50.89-1.13-53.77-2.15-3.56-1.26-20.91,2.91-29.77,3.48-8.49.54-42.08,2.8-50.36,3-10.37.2-21.3-.12-21.55-10.11-.14-5.61-5.37-46-4.63-51.76h-310c0,1.3-64.18-.14-95-.4v91.12h923.76V1577.67Zm275.06,512H2782.37v-304a19.34,19.34,0,0,1,19.34-19.34h167.55Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#c2f4ff"}} d="M2493.63,1518.65c-1.22-2.55-2.55-5-4-7.46-1.13-1.92-2.32-3.81-3.57-5.64a97.45,97.45,0,0,0-160.89,0c-1.26,1.84-2.45,3.74-3.59,5.67-1.43,2.42-2.76,4.91-4,7.46A97.48,97.48,0,0,0,2396,1657.5a45.49,45.49,0,0,1,4.29-20.29c4.75-10.25,11.85-15.85,17.3-13.66,3.44,1.4,3.76,6.1,4.33,14.63.36,5.22,1,14.32,3,17.89q1.73-.35,3.44-.76c.75-.18,1.49-.37,2.24-.57l1.95-.52a103.66,103.66,0,0,0,12.4-4.49l1.7-.78,1.12-.53a97.51,97.51,0,0,0,45.91-129.77Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2969,1767.15H2801.47a19.34,19.34,0,0,0-19.34,19.34v304H2969Z" transform="translate(-1756.98 -1363.12)"/><polygon style={{"fill":"#00a9de"}} points="936.97 71.05 936.97 148.82 936.97 215.3 1275.64 215.3 1327.68 215.3 1327.68 71.05 936.97 71.05"/><path style={{"fill":"#f3f6f8"}} d="M2136.25,1998.84l52-.38,3.78,41.27-42.35-3.82S2132.86,2032.54,2136.25,1998.84Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e1eff9"}} d="M2125.33,1518.65h-16.79a6.71,6.71,0,0,1-6.71-6.71v-16.79a6.71,6.71,0,1,1,13.43,0v10.07h10.07a6.71,6.71,0,0,1,0,13.43Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e1eff9"}} d="M2108.55,1467.71a6.71,6.71,0,0,1-6.71-6.71v-34.16a6.71,6.71,0,0,1,13.43,0V1461A6.71,6.71,0,0,1,2108.55,1467.71Zm9.13-66.52a6.71,6.71,0,0,1-5.59-10.43,61.47,61.47,0,0,1,29.41-23.59,6.71,6.71,0,1,1,4.8,12.54,48.88,48.88,0,0,0-23,18.48A6.7,6.7,0,0,1,2117.68,1401.19Zm905.71-.17a6.7,6.7,0,0,1-5.59-3,48.78,48.78,0,0,0-23.09-18.39,6.71,6.71,0,0,1,4.75-12.56,61.51,61.51,0,0,1,29.51,23.47,6.71,6.71,0,0,1-5.57,10.45Zm-60-24.48h-34.16a6.71,6.71,0,0,1,0-13.43h34.16a6.71,6.71,0,0,1,0,13.43Zm-68.33,0h-34.16a6.71,6.71,0,0,1,0-13.43H2895a6.71,6.71,0,0,1,0,13.43Zm-68.32,0h-34.16a6.71,6.71,0,0,1,0-13.43h34.16a6.71,6.71,0,1,1,0,13.43Zm-68.33,0h-34.16a6.71,6.71,0,1,1,0-13.43h34.16a6.71,6.71,0,0,1,0,13.43Zm-68.32,0h-34.16a6.71,6.71,0,0,1,0-13.43H2690a6.71,6.71,0,0,1,0,13.43Zm-68.33,0h-34.16a6.71,6.71,0,0,1,0-13.43h34.16a6.71,6.71,0,0,1,0,13.43Zm-68.32,0h-34.16a6.71,6.71,0,0,1,0-13.43h34.16a6.71,6.71,0,0,1,0,13.43Zm-68.33,0h-34.16a6.71,6.71,0,0,1,0-13.43h34.16a6.71,6.71,0,0,1,0,13.43Zm-68.32,0h-34.16a6.71,6.71,0,1,1,0-13.43h34.16a6.71,6.71,0,0,1,0,13.43Zm-68.33,0h-34.16a6.71,6.71,0,0,1,0-13.43h34.16a6.71,6.71,0,1,1,0,13.43Zm-68.32,0h-34.17a6.71,6.71,0,1,1,0-13.43h34.17a6.71,6.71,0,0,1,0,13.43Zm-68.33,0h-34.16a6.71,6.71,0,0,1,0-13.43h34.16a6.71,6.71,0,0,1,0,13.43Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#a6c1d1"}} d="M2595.87,2146.26s-4.79,103.66-20.35,167.09l-91.65,1.2s-7.35-4.68,2.39-9.57c10.22-5.13,37.63-10.63,40.69-16.76,6-12,3.59-135.24,3.59-135.24" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#a6c1d1"}} d="M2631.51,2149.4s4.79,96.94,20.35,160.37L2732,2311s7.35-4.68-2.39-9.57c-10.22-5.13-37.63-10.63-40.69-16.76-6-12,11.69-142,11.69-142" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2428.56,1659.71s2.15,1.76,2.95-5.22a96.8,96.8,0,0,1-9.45,2.1C2423.44,1659.33,2425.48,1660.74,2428.56,1659.71Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#a6c1d1"}} d="M2428.56,1659.71c-3.08,1-5.12-.39-6.51-3.12a98.07,98.07,0,0,1-16.43,1.39c-2,0-3.92-.07-5.86-.18.71,10.87,6.35,22.22,21.32,30l10.92,5.91,18.25-11.25c1.85-15.18-1.32-26.11-4.73-33a96.7,96.7,0,0,1-14,5C2430.72,1661.48,2428.56,1659.71,2428.56,1659.71Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#a6c1d1"}} d="M2422.06,1656.59c-4.26-8.42-2.32-29.41-5.46-30.69-5.95-2.42-18,14.09-16.83,31.89,1.94.11,3.89.18,5.86.18A98.07,98.07,0,0,0,2422.06,1656.59Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#00a9de"}} d="M2669.78,2003.53a3.36,3.36,0,0,1-.35-6.69l37.1-4a3.36,3.36,0,1,1,.72,6.67l-37.1,4Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#00a9de"}} d="M2695.47,2023.4a24.39,24.39,0,0,1-17.25-6.64,18.91,18.91,0,0,1-6-14.79,3.21,3.21,0,0,1,3.55-3.15,3.35,3.35,0,0,1,3.15,3.55,12.26,12.26,0,0,0,4,9.57,18.38,18.38,0,0,0,14.33,4.73l6.47-1.8a3.35,3.35,0,0,1,1.74,6.48l-7,1.9C2697.41,2023.35,2696.44,2023.4,2695.47,2023.4Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2510.57,1801.68a3.36,3.36,0,0,1-1.38-6.42l29-13a3.36,3.36,0,1,1,2.75,6.12l-29,13A3.32,3.32,0,0,1,2510.57,1801.68Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2546.66,1602.62c.17,4,1.34,7,2.68,7.81.92.57,2.35-.09,3.47-.81q-.24-2.52-.3-5.06Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2550.45,1591.37a9.56,9.56,0,0,0-3,4.43l5.24,1.75c.16-2.17.43-4.32.79-6.45a3.31,3.31,0,0,1-1-.72A4.74,4.74,0,0,0,2550.45,1591.37Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#a6c1d1"}} d="M2580.7,1637.25a20.24,20.24,0,0,1-10.18-17.25l1-9.1-12.14-4a64.44,64.44,0,0,0,1.22,9.25c3.32,15.85,7.25,28.2,24.71,31a3.37,3.37,0,0,1,2.81,2.92l2.16,18.43a3.37,3.37,0,0,1-2.94,3.73l-.4,0a3.34,3.34,0,0,1-2.14-.78v8.46l42,2.24V1644.6a24.54,24.54,0,0,1-5.72,2.1C2603.51,1650.74,2589.78,1642.36,2580.7,1637.25Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#a6c1d1"}} d="M2616.75,1611,2606,1582s-14.32-8-27.77-7.19C2585.13,1590.91,2599.26,1606.61,2616.75,1611Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#a6c1d1"}} d="M2561,1587.76a62.57,62.57,0,0,0-1.69,12l12.91,4.3,1.53-14.5S2566,1590.51,2561,1587.76Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f84"}} d="M2642.18,1608.93a40.09,40.09,0,0,1-25.43,2c-17.49-4.36-31.61-20.06-38.5-36.2-3.84-9-5.43-18.16-4.09-25.55-6.69,5.25-12.38,13.71-16.59,26.57a18.47,18.47,0,0,0-.66,2.65c-.72,1.84-1.33,3.72-1.87,5.64a7.23,7.23,0,0,0-4-.26c-4.5,1-9.8,5.64-10.81,13.69-.81,6.49.17,15.26,5.63,18.63a8.18,8.18,0,0,0,4.33,1.21,10.19,10.19,0,0,0,3.69-.74c.06.28.1.57.16.85,3.44,16.44,8.2,31.53,27.7,35.78l1.87,16a3.39,3.39,0,0,0,3.33,3l.4,0a3.37,3.37,0,0,0,2.94-3.73l-2.16-18.43a3.37,3.37,0,0,0-2.81-2.92c-17.45-2.8-21.38-15.15-24.71-31a64.44,64.44,0,0,1-1.22-9.25l12.14,4-1,9.1a20.24,20.24,0,0,0,10.18,17.25c9.08,5.11,22.81,13.49,40.3,9.45a24.54,24.54,0,0,0,5.72-2.1c11.87-6.1,18.57-21.52,20.71-38.28A40.64,40.64,0,0,1,2642.18,1608.93Zm-92.84,1.5c-1.34-.83-2.51-3.81-2.68-7.81l5.85,1.95q.06,2.53.3,5.06C2551.69,1610.34,2550.26,1611,2549.34,1610.44Zm3.34-12.89-5.24-1.75a9.56,9.56,0,0,1,3-4.43,4.74,4.74,0,0,1,2-1,3.31,3.31,0,0,0,1,.72C2553.1,1593.22,2552.84,1595.38,2552.68,1597.55Zm19.52,6.5-12.91-4.3a62.57,62.57,0,0,1,1.69-12c5,2.75,12.75,1.79,12.75,1.79Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#74dcfc"}} d="M2584.48,1535.27c-5.88,2.56-9.17,7.61-10.32,13.94-4.83,26.63,28.33,76.05,68,59.72a40.64,40.64,0,0,0,5.24-2.61C2686.87,1583,2632.3,1514.44,2584.48,1535.27Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#86a6bd","opacity":"0.26"}} d="M2032.34,1985.67h150.18a8.52,8.52,0,0,0,8.52-8.89l-4.28-99.89a6.41,6.41,0,0,0-6.42-6.15H2030.4l2,101.93" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#c8d7e2"}} d="M2191.39,2039.77c-2.76-16-4.06-32-5.43-48.07l-.8-12.05-.4-6-.1-1.51a14.89,14.89,0,0,1,0-2,8.56,8.56,0,0,1,1.94-4.75,10.8,10.8,0,0,1,8-3.8l6.15-.07,12.08-.07,12.08.12,6.15.07a10.76,10.76,0,0,1,8,3.78,8.47,8.47,0,0,1,1.92,4.72l.15,3.1.28,6,.52,12.07c.57,16.1,1.08,32.19.8,48.34a1.35,1.35,0,0,1-2.68.15c-2.1-16-3.41-32.06-4.67-48.12l-.85-12-.4-6-.2-2.93a1.39,1.39,0,0,0-.37-.76,3.69,3.69,0,0,0-2.7-1.08l-5.92.05-12.08.12-12.08-.07-5.92,0a3.64,3.64,0,0,0-2.66,1.06,1.39,1.39,0,0,0-.37.73s0,.47,0,1l.07,1.51.28,6,.57,12.06c.45,16.1,1,32.2,0,48.38a.68.68,0,0,1-1.34.08Z" transform="translate(-1756.98 -1363.12)"/><polygon style={{"fill":"#f3f6f8"}} points="471.79 657.89 469.28 613.56 442.97 613.56 445.48 657.83 471.79 657.89"/><line style={{"fill":"#fff"}} x1="392.72" x2="428.98" y1="701.82" y2="701.82"/><path style={{"fill":"#e9eff4"}} d="M2149.71,2064.26a21.59,21.59,0,0,1,9.06-2.71,83.69,83.69,0,0,1,9.06-.42c3,.08,6,.26,9.06.51a34.08,34.08,0,0,1,9.06,2,1.44,1.44,0,0,1,0,2.68,34.08,34.08,0,0,1-9.06,2c-3,.25-6,.44-9.06.51a83.69,83.69,0,0,1-9.06-.42,21.59,21.59,0,0,1-9.06-2.71.78.78,0,0,1-.28-1.06A.8.8,0,0,1,2149.71,2064.26Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e9eff4"}} d="M2181.34,2034.57c-17.22-1.19-34.44-1.6-51.66-1.94l-25.83-.28-12.92-.12-6.46-.06a18,18,0,0,1-5.17-.89,16.73,16.73,0,0,1-11.49-16.09l-.16-17.54c-2.3-.12-4.6-.15-6.9-.15l-.16,17.7a24,24,0,0,0,16.34,23.3,25.54,25.54,0,0,0,7.53,1.15l6.46-.06,12.92-.12,25.83-.28c17.22-.34,34.44-.74,51.66-1.94a1.35,1.35,0,0,0,0-2.69Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e9eff4"}} d="M2156.47,2034.57c-8.58-1.15-15.3-7.64-16.55-15.28-.52-3.45-.09-8.55-.11-13l.17-9.79h-7.46l.17,9.79c.28,4.67-.32,8.81.82,14.38a22.45,22.45,0,0,0,8.62,12.8,20.63,20.63,0,0,0,14.34,3.78,1.38,1.38,0,0,0,1.18-1.18A1.35,1.35,0,0,0,2156.47,2034.57Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#c8d7e2"}} d="M2189,1994.51a19.45,19.45,0,0,1-5.57.7h-4.77v0h-.5c-28.24.05-56.47.45-84.71.69-30.47.46-60.93,1.09-91.4,2.05a.67.67,0,0,0,0,1.34c30.47,1,60.93,1.59,91.4,2.05,30.47.26,60.93.72,91.4.71h.15a3.45,3.45,0,0,0,.65-.09,27.44,27.44,0,0,0,3.36-.4Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#c8d7e2"}} d="M2207.27,1957.36l-2.43-61.2-.61-15.3c-.15-2.7-.09-4.75-.44-8a21.85,21.85,0,0,0-18.16-18.52,36.58,36.58,0,0,0-6.11-.28,3.76,3.76,0,0,0-.72-.07l-159,.55-9.94.09a16.26,16.26,0,0,0-11.19,3.89,15.82,15.82,0,0,0-5.41,10.68c-.07,3.91.13,6.79.18,10.23l1,39.73c.59,26.49,1.48,53,2.47,79.45a1.34,1.34,0,0,0,2.68,0c.11-26.5.14-53-.15-79.49l-.29-39.74c0-3.18-.1-6.93,0-9.63a9.79,9.79,0,0,1,3.47-6.54,10,10,0,0,1,7.22-2.24l3.91,0,1.63,55c.48,19.37,1.43,38.74,2.16,58.1a1.34,1.34,0,0,0,2.68-.05c0-19.38.13-38.77-.16-58.14l-.56-54.84h.27l155.34.54.13-.07h2.09a54.42,54.42,0,0,1,7,.23,14.2,14.2,0,0,1,9.76,6.53,14,14,0,0,1,2,5.63c.2,1.84.24,4.9.38,7.29l.7,15.29,1.41,30.59,1.41,30.59.28,6.14a47.87,47.87,0,0,1,7.11.15Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#c8d7e2"}} d="M2191.39,2039.77c-2.76-16-4.06-32-5.43-48.07l-.8-12.05-.4-6-.1-1.51a14.89,14.89,0,0,1,0-2,8.56,8.56,0,0,1,1.94-4.75,10.8,10.8,0,0,1,8-3.8l6.15-.07,12.08-.07,12.08.12,6.15.07a10.76,10.76,0,0,1,8,3.78,8.47,8.47,0,0,1,1.92,4.72l.15,3.1.28,6,.52,12.07c.57,16.1,1.08,32.19.8,48.34a1.35,1.35,0,0,1-2.68.15c-2.1-16-3.41-32.06-4.67-48.12l-.85-12-.4-6-.2-2.93a1.39,1.39,0,0,0-.37-.76,3.69,3.69,0,0,0-2.7-1.08l-5.92.05-12.08.12-12.08-.07-5.92,0a3.64,3.64,0,0,0-2.66,1.06,1.39,1.39,0,0,0-.37.73s0,.47,0,1l.07,1.51.28,6,.57,12.06c.45,16.1,1,32.2,0,48.38a.68.68,0,0,1-1.34.08Z" transform="translate(-1756.98 -1363.12)"/><polygon style={{"fill":"#f3f6f8"}} points="471.79 657.89 469.28 613.56 442.97 613.56 445.48 657.83 471.79 657.89"/><line style={{"fill":"#fff"}} x1="392.72" x2="428.98" y1="701.82" y2="701.82"/><path style={{"fill":"#e9eff4"}} d="M2149.71,2064.26a21.59,21.59,0,0,1,9.06-2.71,83.69,83.69,0,0,1,9.06-.42c3,.08,6,.26,9.06.51a34.08,34.08,0,0,1,9.06,2,1.44,1.44,0,0,1,0,2.68,34.08,34.08,0,0,1-9.06,2c-3,.25-6,.44-9.06.51a83.69,83.69,0,0,1-9.06-.42,21.59,21.59,0,0,1-9.06-2.71.78.78,0,0,1-.28-1.06A.8.8,0,0,1,2149.71,2064.26Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e9eff4"}} d="M1758.29,2322.51c129.84-3.7,259.68-4.48,389.52-5.4l389.52-.85c259.68.81,519.36.35,779,4.91a2.69,2.69,0,0,1,0,5.37c-259.68,4.56-519.36,4.1-779,4.91l-389.52-.85c-129.84-.92-259.68-1.7-389.52-5.4a1.34,1.34,0,0,1,0-2.68Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2531.81,2280.22a3.36,3.36,0,0,1-3.21-4.33c4.87-16,2.75-48.59.71-80-1-15.5-2-30.14-2.1-42.83a3.36,3.36,0,0,1,3.32-3.4h0a3.36,3.36,0,0,1,3.36,3.32c.14,12.51,1.09,27.07,2.09,42.47,2.09,32.06,4.24,65.22-1,82.44A3.36,3.36,0,0,1,2531.81,2280.22Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2651.85,2313.12a3.35,3.35,0,0,1-3.31-2.86c-.12-.81-12.12-81.19-20.37-160.52a3.36,3.36,0,1,1,6.67-.7c8.24,79.19,20.21,159.42,20.33,160.22a3.36,3.36,0,0,1-2.82,3.82A3.27,3.27,0,0,1,2651.85,2313.12Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e1eff9"}} d="M3025.91,1433.5v-6.88a6.71,6.71,0,0,1,13.43,0V1434" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#a6c1d1"}} d="M2798.25,1578.5v-1.72a26.28,26.28,0,0,1-8.95,4.54s7.5-27.34-.45-29.17-38.4,52.06-38.4,52.06l11,26.43s11.83-10.63,49.88-30.13c8.64-8.13,13.71-15.59,16.29-22Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2782.12,1618.79a3.36,3.36,0,0,1,0-6.71c3.78-.14,30-13.82,42.82-38.15a3.36,3.36,0,1,1,5.94,3.13C2817.51,1602.39,2789,1618.79,2782.12,1618.79Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2761.47,1597.25a3.36,3.36,0,0,1-2.22-5.87c2.76-2.45,7.26-11.57,11.23-19.61,8.05-16.3,11.8-23,16.48-23.58a4.9,4.9,0,0,1,4.44,1.78c4.62,5.4,3.46,18.48,2.22,26.39,2.84-1.22,6-3.06,7.75-5.51a3.36,3.36,0,1,1,5.47,3.89c-5.18,7.26-16.36,9.76-16.83,9.86a3.36,3.36,0,0,1-4-4c1.66-7.7,2.93-20,1.06-24.9-2.73,3.15-7.36,12.54-10.58,19-4.66,9.44-9.05,18.35-12.81,21.66A3.31,3.31,0,0,1,2761.47,1597.25Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2425.9,1657.3c.14.09.43.29,1.35,0,.59-.19.91-.94,1.08-2q-1.71.41-3.44.76A3.51,3.51,0,0,0,2425.9,1657.3Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2416.59,1625.9c3.14,1.27,1.2,22.27,5.46,30.69.95-.16,1.89-.34,2.83-.53-2-3.57-2.59-12.67-3-17.89-.57-8.53-.89-13.23-4.33-14.63-5.44-2.19-12.54,3.41-17.3,13.66a45.49,45.49,0,0,0-4.29,20.29c1.24.12,2.48.23,3.74.3C2398.59,1640,2410.65,1623.49,2416.59,1625.9Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2425.9,1657.3c.14.09.43.29,1.35,0,.59-.19.91-.94,1.08-2q-1.71.41-3.44.76A3.51,3.51,0,0,0,2425.9,1657.3Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2425.9,1657.3c.14.09.43.29,1.35,0,.59-.19.91-.94,1.08-2q-1.71.41-3.44.76A3.51,3.51,0,0,0,2425.9,1657.3Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2428.33,1655.3l2.24-.57C2429.82,1654.93,2429.08,1655.12,2428.33,1655.3Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2447.73,1648.42l-1.12.53Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e1eff9"}} d="M2191.3,1505.23h-33a6.71,6.71,0,1,0,0,13.43h33a6.71,6.71,0,1,0,0-13.43Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e1eff9"}} d="M2257.26,1505.23h-33a6.71,6.71,0,1,0,0,13.43h33a6.71,6.71,0,1,0,0-13.43Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e1eff9"}} d="M2587.08,1505.23h-33a6.71,6.71,0,1,0,0,13.43h33a6.71,6.71,0,1,0,0-13.43Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e1eff9"}} d="M2686,1505.23a6.71,6.71,0,1,0,0,13.43h8v-13.43Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e1eff9"}} d="M2653,1499.58h-33a6.71,6.71,0,0,0,0,13.43h33a6.71,6.71,0,0,0,0-13.43Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e1eff9"}} d="M2323.22,1505.23h-33a6.71,6.71,0,0,0,0,13.43h27.37a97.31,97.31,0,0,1,7.57-13.14A6.72,6.72,0,0,0,2323.22,1505.23Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#e1eff9"}} d="M2521.11,1505.23h-33a6.71,6.71,0,0,0-2.05.32,97.32,97.32,0,0,1,7.55,13.11h27.48a6.71,6.71,0,1,0,0-13.43Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"none"}} d="M2425.9,1657.3c.14.09.43.29,1.35,0,.59-.19.91-.94,1.08-2q-1.71.41-3.44.76A3.51,3.51,0,0,0,2425.9,1657.3Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2430.57,1654.73l-2.24.57c-.16,1-.49,1.78-1.08,2-.92.31-1.21.1-1.35,0a3.51,3.51,0,0,1-1-1.23c-2-3.57-2.59-12.67-3-17.89-.57-8.53-.89-13.23-4.33-14.63-5.44-2.19-12.54,3.41-17.3,13.66a45.49,45.49,0,0,0-4.29,20.29c.39,12.48,6.62,25.37,23.26,34.07a3.4,3.4,0,0,0,1.55.38,3.36,3.36,0,0,0,1.55-6.33c-23.86-12.47-20.37-32.83-17.76-41,2.86-9,7.67-13.76,9.75-14.69a83.07,83.07,0,0,1,.87,8.7c.65,9.63,1.39,20.54,6.92,24.25a7.94,7.94,0,0,0,7.21.78c4.91-1.64,5.87-5.42,5.78-10.24-.57.2-1.57.5-2.65.8l-1,.28Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2431.51,1654.49l1-.28-1.95.52Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2445.52,1649.46l-.61.27c-1.23.56-2.56,1.13-3.32,1.39a57.89,57.89,0,0,1,4.6,24,3.36,3.36,0,0,0,3.31,3.4h0a3.36,3.36,0,0,0,3.36-3.31,66.28,66.28,0,0,0-5.19-26.75l-1.12.53Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2446.61,1648.95l-1.7.78.61-.27Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#00a9de"}} d="M2547.12,2156.58c-11.43,0-21.7-1.43-27.18-5.63a11.37,11.37,0,0,1-4.7-8.56c-.17-3-.55-7.36-1-12.93-3-34.13-10-114,4.45-204.92a3.36,3.36,0,0,1,6.64,1c-14.33,90.06-7.37,169.4-4.39,203.28.5,5.66.89,10.09,1.06,13.15a4.69,4.69,0,0,0,2.09,3.6c11.59,8.87,57.88,1.65,74.75-1.89a3.36,3.36,0,0,1,1.38,6.57C2595.85,2151.2,2569.3,2156.58,2547.12,2156.58Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#00a9de"}} d="M2643.2,2151.66c-12.44,0-22.94-1.1-27.65-4.25-10.39-6.93-8.37-101.49-7-141.83a3.18,3.18,0,0,1,3.47-3.25,3.37,3.37,0,0,1,3.25,3.47c-2.09,62.26-1.09,130.21,4.2,136.16,9.2,6.1,58.16,1.8,88.94-2.62l-5.81-102.27a3.36,3.36,0,0,1,3.16-3.54,3.19,3.19,0,0,1,3.54,3.16l6,105.34a3.36,3.36,0,0,1-2.85,3.51C2706.69,2146.4,2670.33,2151.66,2643.2,2151.66Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#00a9de"}} d="M2701.14,1985.18a3.35,3.35,0,0,1-3.34-3.09l-7.19-88.58a3.35,3.35,0,1,1,6.69-.54l7.19,88.58a3.36,3.36,0,0,1-3.08,3.61Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#74dcfc"}} d="M2790.95,1624l-32.31-33.51c-15.78,31.57-62.67,78.58-98.1,87.42-.81-.32-1.63-.64-2.49-1-11.37-4.19-76.46-8.61-92-2-10,4.25-16.9,7.49-21.52,11.79-30.74,24.06-50,44.9-50,44.9L2457,1673l-33.51,23.94s28.72,105.32,73,102.93a107.17,107.17,0,0,0,41.78-11.27l3.7,105.84,148.35-2.55-3.6-151.61C2742,1712.26,2790.95,1624,2790.95,1624Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2535.2,1898.17a3.36,3.36,0,0,1,0-6.71l158.76-1.57a3.23,3.23,0,0,1,3.39,3.32,3.36,3.36,0,0,1-3.32,3.39l-158.76,1.57Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#004f82"}} d="M2510.57,1801.68a3.36,3.36,0,0,1-1.38-6.42l29-13a3.36,3.36,0,1,1,2.75,6.12l-29,13A3.32,3.32,0,0,1,2510.57,1801.68Z" transform="translate(-1756.98 -1363.12)"/><path style={{"fill":"#c8d7e2"}} d="M2363.75,2092.76h-.48l-96.46,1.48-97.41,1-195.87.76a3.72,3.72,0,0,1-3.73-3.7v0l-.07-54.71a3.79,3.79,0,0,1,3.78-3.8h0l194.63.42,194.63,1.45h0a1.9,1.9,0,0,1,1.89,1.92v0Zm-1.9-.95v-.47l-1-53.76,1.93,1.93L2168.15,2041l-194.63.42,3.8-3.8-.07,54.71-3.73-3.73,193.41.76,97.22,1Z" transform="translate(-1756.98 -1363.12)"/><line style={{"fill":"#fff"}} x1="216.54" x2="216.54" y1="709.01" y2="947.85"/><path style={{"fill":"#c8d7e2"}} d="M1974.19,2072.13c1.85,19.9,2.24,39.81,2.7,59.71l.42,59.71c-.4,39.8-.17,79.61-2.46,119.42a1.35,1.35,0,0,1-2.69,0c-2.28-39.8-2.05-79.61-2.45-119.42l.42-59.71c.46-19.9.85-39.8,2.7-59.71a.67.67,0,0,1,1.34,0Z" transform="translate(-1756.98 -1363.12)"/><line style={{"fill":"#fff"}} x1="605.81" x2="605.81" y1="729.17" y2="947.85"/><path style={{"fill":"#c8d7e2"}} d="M2363.46,2092.29c1.85,18.22,2.24,36.45,2.7,54.67l.42,54.67c-.4,36.45-.17,72.89-2.45,109.34a1.35,1.35,0,0,1-2.69,0c-2.28-36.45-2.05-72.89-2.46-109.34l.43-54.67c.46-18.22.85-36.45,2.7-54.67a.67.67,0,0,1,1.34,0Z" transform="translate(-1756.98 -1363.12)"/></svg>

						<div className="jp-apps-card__clouds">
							<img src={ imagePath + '/white-clouds.svg' } alt="" />
						</div>
					</div>

					<div className="jp-apps-card__description">
						<h3 className="jp-apps-card__header">{ __( 'Introducing Unlimited Themes' ) }</h3>
						{ __(
							'{{subhead}}Only with Jetpack Professional{{/subhead}}' +
							'{{p}}Protect your site and work with Jetpack Personal: daily automated backups, unlimited storage, and expert priority support. Security essentials for every WordPress site starting from $3.50.{{/p}}' +
							'{{p}}Or go Pro with more than 200 Premium Themes, business class security, unlimited video hosting, monetization, marketing automation, and SEO tools.{{/p}}',
							{
								components: {
									subhead: <p className="jp-apps-card__promo_subhead" />,
									p: <p className="jp-apps-card__paragraph" />
								}
							}
						) }

						<p>
							<Button
								className="is-primary"
								onClick={ this.trackGetStarted }
								href={ 'https://jetpack.com/redirect/?source=upgrade-pro-' + urlFriendlyPlan + '&site=' + this.props.siteRawUrl }>
								{ __( 'Explore Professional' ) }
							</Button>
							&nbsp;
							<Button
								onClick={ this.trackComparePlans }
								href={ 'https://jetpack.com/redirect/?source=plans-compare-free' + '&site=' + this.props.siteRawUrl }>
								{ __( 'Compare All Plans' ) }
							</Button>
						</p>

						<a
							onClick={ this.trackGetStarted }
							href={ 'https://jetpack.com/redirect/?source=upgrade-pro-' + urlFriendlyPlan + '&site=' + this.props.siteRawUrl }
						>
							{ __( 'Limited time 50% introductory discount on Jetpack Professional.' ) }
						</a>
					</div>
				</Card>
			</div>
						);
	}
} );

ThemesPromoCard.propTypes = {
	className: React.PropTypes.string,
	plan: React.PropTypes.string
};

export default ThemesPromoCard;
