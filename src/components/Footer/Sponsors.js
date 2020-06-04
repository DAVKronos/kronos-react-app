import React from "react";
import {getAPIHostUrl} from "../../utils/rest-helper";

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
				<img alt="Red Drop Design" src={getAPIHostUrl('/assets/sponsors/sponsor-rdd-c4d226345e0387d1ef4aeafb8389449bb2f46c961412077eb8203ddc1747b4db.PNG')} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.uitvaartverzekeringexpert.nl/">
				<img alt="UitvaartverzekeringExpert" src={getAPIHostUrl('/assets/sponsors/sponsor-UVE-c986a52d415e65cf4477acc5b0a8c828cd84bc805271bf85466dc9d42db136ee.png')} />
			</a>
		</div>
    </div>
	<div className="row sponsor-white">
        <div className="col-xs-4">
			<a href="https://www.twenteinvest.nl/">
				<img alt="Twente Invest! Beter in Vastgoed!" src={getAPIHostUrl('/assets/sponsors/sponsor-twenteinvest-f4ab8be9a8e04a9619f13a9333a987f3f9d8a8e52581cfb1a7b9b2445ae50e57.jpg')} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.autoverzekering.nl/">
				<img alt="Autoverzekering vergelijken" src={getAPIHostUrl('/assets/sponsors/sponsor-auto-87b01855b3fa5caca1b9e3fc2f65d94fbc36c9b948b4e7c2d2ab68ade1677ac7.png')} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.overstappen.nl/autoverzekering/">
				<img alt="Goedkope autoverzekering" src={getAPIHostUrl('/assets/sponsors/sponsor-overstappen-330d142e03ab6b936b6e13385898727e59d73537df87308a3ab63373a90132ae.jpg')} />
			</a>
		</div>
    </div>
	<div className="row sponsor-white">
        <div className="col-xs-4">
			<a href="https://www.easyswitch.nl/energie-vergelijken/">
				<img alt="energie vergelijken" src={getAPIHostUrl('/assets/sponsors/sponsor-easyswitch-2ef8df34a33f91b09c2659859d200482cb5b60c61d2b59531846c4bcf1bd5822.svg')} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.simonlydiscount.nl/sim-only-providers.html">
				<img alt="vergelijk alle sim only providers op SimOnlyDiscount!" src={getAPIHostUrl('/assets/sponsors/sponsor-simonly-1f88c67abbfd3174c6edd6aef02e2093e8a1ac339e30c6cfcd86b3ef9e73a0ec.png')} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.tvexpert.nl/android/virtual-reality-vr-bril.html">
				<img alt="een virtual reality (vr) bril kopen? Bezoek de TvExpert!" className="center-block" src={getAPIHostUrl('/assets/sponsors/sponsor-tvexpert-59300b3692d98c5e6bc436e01dcb998735d7199d8af0e38ad69bdc42c94a0843.png')} />
			</a>
		</div>
    </div>
	<div className="row sponsor-white">
        <div className="col-xs-4">
			<a href="https://www.radiocontrolexpert.nl/rc/rc-tank.html">
				<img alt="een radiografisch bestuurbare (rc) tank kopen? Bezoek de RadioControlExpert!" className="center-block" src={getAPIHostUrl('/assets/sponsors/sponsor-radiocontrol-e818d4fb2931bc45910aa4ef8421040276f727521ed0b0ef77eef1ffac6405f6.png')} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://www.uitvaartverzekeringvergelijken.com">
				<img alt="uitvaartverzekeringvergelijken.com" src={getAPIHostUrl('/assets/sponsors/sponsor-uitvaart-ee89895b5cf2e1e3cbd69b3ff28008cac4c22db641954794876dc082a8353494.png')} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://swift.online/">
				<img alt="swift.online" height="128" className="center-block" src={getAPIHostUrl('/assets/sponsors/sponsor-swift-4ae113d9ce79a2e9435cfc5a0663a5bc093d09080cde2519ea11c683dd0e26b8.png')} />
			</a>
		</div>
    </div>
	<div className="row sponsor-white">
        <div className="col-xs-4">
			<a href="http://www.breukersverhuur.nl">
				<img alt="Breukers verhuur" src={getAPIHostUrl('/assets/sponsors/sponsor-breukers-0223dfc2a0c9cdd756e4b4307a375eeae751ec68197fa752f022979dc3f60eea.jpg')} />
			</a>
		</div>
		<div className="col-xs-4">
			<a href="https://uitvaartverzekeringwijzer.net">
				<img alt="Uitvaartverzekeringwijzer.net" src={getAPIHostUrl('/assets/sponsors/sponsor-uitvaartverzekeringwijzer-b29d5f01c4a42658624f8245aa8a9337aba5b1a1d184e492d92d6df8d60ac0d4.png')} />
			</a>
		</div>
    </div>
	</div>
};

export default Sponsors;