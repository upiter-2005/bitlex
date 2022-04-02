import React from 'react';

function Footer (){

    return(
        <footer>
		<div className="top">
			<div className="container">
				<h2>Самая быстрая, самая удобная децентрализованная биржа</h2>
				{/* <h2>The fastest, most user-friendly decentralized exchange</h2> */}

				 <p>We're here to help
					BITLEX customer service is online 24/7 to help with your needs.</p>  
				<div className="buts">
					<a href="#" className="register">Создайте аккаунт</a>
					<a href="#" className="register">Обменивать сейчас</a>
				</div>
			</div>
		</div>

		<div className="bottom">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<h3><a href="#">Новости</a></h3>
						 {/* <ul>
							<li><a href="#">О нас</a></li>
							<li><a href="#">Условия</a></li>
							<li><a href="#">Конфиденциальность</a></li>
							<li><a href="#">Комиссии</a></li>
							<li><a href="#">Вакансии</a></li>
							<li><a href="#">Новости</a></li>
						</ul>  */}
					</div>
					<div className="col-md-3">
						<h3><a href="#">Белая бумага</a></h3>
					
					</div>
					<div className="col-md-3">
						<h3><a href="support.html">Служба поддержки</a></h3>
						{/* <ul>
							<li><a href="#">Документация</a></li>
							<li><a href="#">FAQ</a></li>
							<li><a href="#">Центр поддержки</a></li>

						</ul>  */}
					</div>
					<div className="col-md-3">
						<h3>Сообщество</h3>
						<div className="soc">
							{/* <a href="#"><img src="img/facebook-logo.svg" alt=""></a>
							<a href="#"><img src="img/telegram.svg" alt=""></a>
							<a href="#"><img src="img/twitter-logo-silhouette.svg" alt=""></a> */}
						</div>
					</div>
				</div>

			</div>
		</div>


		<div className="container copy">
			<span>© 2017 - 2022 Bitlex.com All rights reserved</span>
			<div className="dig-footer">
				<span>2022-02-19 14:38:4824h</span>
				<span>Расчетное количество: TRX: 157 864 000, EOS: 901 821, IOST: 71 055 101, ETH: 11 023 </span>
			</div>
		</div>

	</footer>
    )
}

export default Footer;