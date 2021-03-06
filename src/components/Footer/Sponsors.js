import React from "react";

//TODO Add sponsors either directly of from Rails url.
const Sponsors = () => {
    return <div>
	<div className="row sponsor-white">
        <div className="col-xs-4">
			<div className="sponsor-text">
			Sponsoren
			</div>
		</div>
		<div className="col-xs-4">
			<a href="https://reddropdesign.nl">
				<img alt="Red Drop Design" src={'/img/sponsors/sponsor-rdd.PNG'} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.uitvaartverzekeringexpert.nl/">
				<img alt="UitvaartverzekeringExpert" src={'/img/sponsors/sponsor-UVE.png'} />
			</a>
		</div>
    </div>
	<div className="row sponsor-white">
        <div className="col-xs-4">
			<a href="https://www.twenteinvest.nl/">
				<img alt="Twente Invest! Beter in Vastgoed!" src={'/img/sponsors/sponsor-twenteinvest.jpg'} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.autoverzekering.nl/">
				<img alt="Autoverzekering vergelijken" src={'/img/sponsors/sponsor-auto.png'} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.overstappen.nl/autoverzekering/">
				<img alt="Goedkope autoverzekering" src={'/img/sponsors/sponsor-overstappen.jpg'} />
			</a>
		</div>
    </div>
	<div className="row sponsor-white">
        <div className="col-xs-4">
			<a href="https://www.easyswitch.nl/energie-vergelijken/">
				<img alt="energie vergelijken" src={'/img/sponsors/sponsor-easyswitch.svg'} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.simonlydiscount.nl/sim-only-providers.html">
				<img alt="vergelijk alle sim only providers op SimOnlyDiscount!" src={'/img/sponsors/sponsor-simonly.png'} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.tvexpert.nl/android/virtual-reality-vr-bril.html">
				<img alt="een virtual reality (vr) bril kopen? Bezoek de TvExpert!" className="center-block" src={'/img/sponsors/sponsor-tvexpert.png'} />
			</a>
		</div>
    </div>
	<div className="row sponsor-white">
        <div className="col-xs-4">
			<a href="https://www.radiocontrolexpert.nl/rc/rc-tank.html">
				<img alt="een radiografisch bestuurbare (rc) tank kopen? Bezoek de RadioControlExpert!" className="center-block" src={'/img/sponsors/sponsor-radiocontrol.png'} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.uitvaartverzekeringvergelijken.com">
				<img alt="uitvaartverzekeringvergelijken.com" src={'/img/sponsors/sponsor-uitvaart.png'} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://swift.online/">
				<img alt="swift.online" height="128" className="center-block" src={'/img/sponsors/sponsor-swift.png'} />
			</a>
		</div>
    </div>
	<div className="row sponsor-white">
        <div className="col-xs-4">
			<a href="http://www.breukersverhuur.nl">
				<img alt="Breukers verhuur" src={'/img/sponsors/sponsor-breukers.jpg'} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://uitvaartverzekeringwijzer.net">
				<img alt="Uitvaartverzekeringwijzer.net" src={'/img/sponsors/sponsor-uitvaartverzekeringwijzer.png'} />
			</a>
		</div>
    </div>
	</div>
};

export default Sponsors;