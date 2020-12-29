import './index.scss';
import React from 'react';

export default class Background extends React.Component {
    componentDidMount() {
        window.setup();
        // window.initParticles();
        // window.drawParticles();
        // window.updateParticle();
        // window.drawParticle();
        // window.createCanvas();
        // window.resize();
        // window.renderGlow();
        // window.renderToScreen();
        // window.draw();
    }

    render() {
        return (
            <div className="bg">
                
			<div class="content content--canvas">
				<h2 class="content__title">Swirl</h2>
			</div>
            </div>
        );
    };
}