'use strict';

function CameraController(){
	this.title = "Фотокамера";
	this.platform = device.platform;

		console.log('device.platform: '+device.platform);
 
	this.dimensions = [
		'80x60',
		'160x120',
		'320x240',
		'640x480',
		'800x600',
		'1024x768',
	];

	this.options = {
		dimension: this.dimensions[2],
	};


	// this.availableOptions = {
	// 	dimensions: {
	// 		name: 'размер',
	// 		values: ['320x240','640x480','800x600'],
	// 	},
	// 	source: {
	// 		name: 'источник',
	// 		values: {
	// 			'камера': Camera.PictureSourceType.CAMERA,
	// 			'галерея': Camera.PictureSourceType.PHOTOLIBRARY,
	// 		},
	// 	},
	// 	format: {
	// 		name: 'формат',
	// 		values: {
	// 			'JPG': Camera.EncodingType.JPEG,
	// 			'PNG': Camera.EncodingType.PNG,
	// 		},
	// 	},
	// ];

	// this.currentOptions = {
	// };


	this.photo_src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACgCAYAAADeroRzAAADAFBMVEUAAAD/AAAA/wD//wAAAP//AP8A///////b29u2traSkpJtbW1JSUkkJCTbAAC2AACSAABtAABJAAAkAAAA2wAAtgAAkgAAbQAASQAAJADb2wC2tgCSkgBtbQBJSQAkJAAAANsAALYAAJIAAG0AAEkAACTbANu2ALaSAJJtAG1JAEkkACQA29sAtrYAkpIAbW0ASUkAJCT/29vbtra2kpKSbW1tSUlJJCT/trbbkpK2bW2SSUltJCT/kpLbbW22SUmSJCT/bW3bSUm2JCT/SUnbJCT/JCTb/9u227aStpJtkm1JbUkkSSS2/7aS25Jttm1JkkkkbSSS/5Jt221JtkkkkiRt/21J20kktiRJ/0kk2yQk/yTb2/+2ttuSkrZtbZJJSW0kJEm2tv+SktttbbZJSZIkJG2Skv9tbdtJSbYkJJJtbf9JSdskJLZJSf8kJNskJP///9vb27a2tpKSkm1tbUlJSST//7bb25K2tm2SkkltbST//5Lb2222tkmSkiT//23b20m2tiT//0nb2yT//yT/2//bttu2kraSbZJtSW1JJEn/tv/bktu2bbaSSZJtJG3/kv/bbdu2SbaSJJL/bf/bSdu2JLb/Sf/bJNv/JP/b//+229uStrZtkpJJbW0kSUm2//+S29tttrZJkpIkbW2S//9t29tJtrYkkpJt//9J29sktrZJ//8k29sk////27bbtpK2km2SbUltSSRJJAD/tpLbkm22bUmSSSRtJAD/ttvbkra2bZKSSW1tJElJACT/krbbbZK2SW2SJEltACTbtv+2ktuSbbZtSZJJJG0kAEm2kv+SbdttSbZJJJIkAG222/+SttttkrZJbZIkSW0AJEmStv9tkttJbbYkSZIAJG22/9uS27ZttpJJkm0kbUkASSSS/7Zt25JJtm0kkkkAbSTb/7a225KStm1tkklJbSQkSQC2/5KS221ttklJkiQkbQD/tgDbkgC2bQCSSQD/ALbbAJK2AG2SAEkAtv8AktsAbbYASZIAAAAAAADPKgIEAAAQbElEQVR42u2deZBVxRXGf28YZhjEYZGoKA4iLgEUXLCCoCIYNaVRcRcxIZpEKzFiVNwSo1YwkkhcIsZCk6iJK3HBBcVdcUPct4hsCoo7IjjAMA7D5I++yDj0uWv3nX7z+qt6VVP95naf1/3d092nT59TaMLDIz7KfBd4eMJ4eMJ4eMJ4eMJ4eMJ4eHjCeKRFediXBd8/JYU4NrkyR0i7kR8uPyVFoQI4CZgHXOyHQsQI4Cxnlg9NIR9LaAeMAd5v1lQ90NtzYwNsBXwW9NG9QOfW4sK3nMiRMAXgYOAtoblbPT++gw7Aiy36aDbQpxQI8wNgRgx5BniefPtyXS/00RfA4NYiTKHJzC5pILCHpnwtsA8wKmY99wHjPV/YB5gY8n0dcHKgcaKwMub/xVMShjTMFTEJ6j/5f+42qWFMrbz7eqXgLN5xcVu9vR8XZ/GuycrKDTx/HLC1HxdnMd8FwpQBxwAXZdAuc4FaP56R2Daj/WVBblspYeN0EPBGhkXYImA0/qgqLnoDr6fs67ok/WzaDjMEeCYDUb4Czg4MUh7J0BG4OUWfzzelPJIS5qYMRFkJTAC6+nHPhAIwFmhI0Pe1wL6tQZjxKYhSD1wFbO7H2ij2BD5OMA5rgFPiTE0mCVONMknHFfJ2oJcfW2voATyd8AW+FuUhkNsaZmwC4fzJs320J7mF/dmAbLkQpiLYosWp1ztE5YfRwKoEpPksmNasEwbgqGZfrwWmCItcj3wxMiFhtsqLMAVgFjAd2DlQby0fW+jHL3fsn2AjMiSvKWkdOjX7e6Dmsdf8+OWOo2OO9wlZF71pDh9XNPt7E833y/z45Y44RwdXATdkbSjraXU3TxgnUC2UTwrsMDOBcSYaynpa3UVTtrxIO3yL4Pd0aLZ4XxIYyb5xXH5pV3oZcAfwIcpC3OqE6RwxZblKjuHAXsAgoD/QPWJq/wTl5vgqymD2pGO7wY5CeS3q/M8cMrpoXqh57C+OvoFjgIdIdhYjfVYD9wCHGXjpTGCSIGeFKS6YctHspClb5RBRtgT+CnwE3AgcYGiAK4FDUf6yC1BW8KpW/J06D4AGG1NpVsJ0dJQw1cClwWCeid0LYDXA31AOYcfTOn4+Ok2y2kZDNghT38pkORDl+HxWoAnyQk+UG8jj5H+WVpnXOJRbELS1dhQVwfRzasrnVwZT1/JgK1qJsjNtmbCfhgNvou6N39aKGsZJwlQIc2fe2BSYSojZW4NZwCPAc8EAfyqs9dsD30fd3hwRaLCoKa4T6urvIJSXYaPl398uN02fcZd0j+axn+ZMlj7EP0V/Dzgn0BpZXpLDgceIf5HMtlvq/Zp255jkgqm71TpBR+dIlm2BxTGJMkp4E7NgEPBojPYftbyLekDT5mwXCaMT9LicyNIDdTIe9hMaUf7ENgerEGicTyJkmWbRZjNd097/ioUwx+ZAlo7AyxHif4yy5uaF7oLGbf75e46EecsTZj1uiBD9ZUJcES2iDPhThGw21ngPFAthpmkeG2V5UI6NEPspYONWtgWdFiLfCmAbw+1NK5Yp6T7NY8dbHIjvAV+GiPwC+uOK1sDZIXI+jlmLsG4c3rVBmKyW3kZBLdvCJeh9cAh2Qj/GndPyicB1wncjUF5yptCQ1ziUWxDU1k6gP/Bz4bvVqJPjJSl3W/sCu6JM+ut8fJajInw+FExzjSle2LHA7sAumu8nBDYaE4bONbmNQ8YpSXff92RLhLk9RNTTUtS3f2B8WxtDE88DjshA9G+Eek801De6cVjs4hpGF7jvNxbIUhO84ToxZ6U0yL1Pcj+YP2eYSnX1vW1oLaPbNX7u4hpGd4ReYYEwJ4TIehrpzmruT/HMOSk1zQRhuuwPDDXQP3mNgxXCmHYpKCAfN0wPdkZpcGfK5y5I8UwtcKXw3U8sEabSRcLUacpMm+H7AdsJ312eod7nArX9BeqO8mEoy/AxqENVCQMQbg5G4Fr0rh+HGRgH3cl0B2w4c2Vcw/xe89hEwyKegRzJKmtHH4je474QscjeO4NW09U3KOPvuECot8oUF0ytYXSe8x0NE0Y6D5oa7HCy4EHhNzQR7vyU1r/lDqF8WMbfIbnFmh6LzIRZkYOQ0tv3CHYR9jvmpazzUUF5727hxQULUTSyEqbWspBdUL6yOsy0TJgjhfJX0mxZAyxFH2h5x1LRMLYJIx3SLUYFWbSFoSgfFx2uylj3G5qyPhkXqNJxyMauEeZrTZnJw78thPL3LJJlU+RUPM+jrKpZME/Y0XSzQJhOrhFmuWUhpcibn1oiS2WwmK7RfLcE5U2YdaH9aQhRTWr6otEwJoWsSvhGZcVl6G8efIO66bjIQBsrLCxQpTqri0HDVGMfay3UuTMqPKkOJwbTkQlIJq6C4RfXScLUWtYwdUK5jWsbY4Xym4Fbctiu11sgTGfXCNOoIU1H1OUvE/hSKO9uoR8OETTZ+RYW1dKW2/QaxjnCgD7ilClV+JFQXmO4H3qhD7/2oqF1S5SpYC3pbTugnLBWFQthdPaQLobkk1K3bGdQi4FsHJyPeeykKVtE9jvpyyyOg3UNY4rZKwTStMdsBlrJndF06JKqYHHdEm9aGgfjhCkvAkFnos/VPBxlpjeBF9H73X5puL/3FjTjS5bGoauLhFlqWdAn0V9dOQQV3sMEVqKSWNnGyJDfWBSEsbWGMSnoE0L5npjLNVlAuYHOCKbAp1A3FE06IFWiv1rylSENY3MtuR4G8lb/QfPoOMNivoVZp+yWuFio3+SW+nihjRsN1a8LjNhAK6bwk3CK5tFLDBPmfOS0gFkX2N2Rr4GsMvSWlgULW10bww310R+F+juZJIyJKcn2Ggbg3+iPA7qgYtllwS4hW/QqYA8D8o8SttNzg2kQS+MA2U7Braxh8iDMh8BdwnfjUIGF0iLK/pH1usa6iJ46XI65c7FcCGNiStpd86gN98mBIaI+TfroUh2RL/ivQfbJiYvrkJ3YTV4FOVhoZ4Rra5g+mkdfwQ5uCRF3fIZ6D0d/szLrWmxUiLxjDPfNUKGdI10jTFf0MeVsoCfK+iuJnCVc2mDUyfQs4F5U9rlCxvrqBDlnYj66Ql+hrZNcI0wZG15ot5kC59chIjegP3XOGwOCNYWUp6CfhTY3E9o7zzXCIKwBbIX9KBAeS64BM9dPs+y6wlI2n2qp3fZCe5e6SJh5mse7WxyUrkKbLTuqfc5kOQjlzCTJdBt2cxHo2v6Xi4SZpXl8e8uDsz3RyddnWVL/LVGJitAQJsvz2M94slDT7lQXCaML+zk4h4HamfCYd+umqCtR8fFsYD/U5bQwGV6zYJvS4RXB5GCMMKZW6rqDr00sd04BdY02yrBWjoohsxC4GpU3ICvKA7vHjMDm1Dfi/7vE+B9bxjuzRDWkYa4m32ianYL1QJpsao1EpOONsQNamKLdNcDpltcwuogTi01qGFOEGa95fKylTqlBPsiL+1lFer/jFzK2fSOWokMB1wi/tSimpG4WOmTHYMB2SiFPc1ShHL+TogyVBicMUVl1x6Aid9sIPr1U+K3GruUU0xpml2ABFxYSfjUqDt1mKHP/ghC70dwUMqxFTivzDSqS1daomDZhgZV/CDyM+YtmS0PMEE6tYUZqHr/ZYEf0i7EbelOzha5Amcbn8F0fmh9lkOW4Fu3WA5M1GqsKFekhTOZnMRvt4mdCO32zcsH0GmaY5vEHDHVCD5R7Q5iotxIeC6UA7IY6uTURLGBP1D3s84hOgnEUymdYkv1BzFnFRwptDHGNMAMEQ1VWdBCMgi1PqVsjk2sS7Mr6FIG6zyRD7QwT6j/QNcLUaB5/x0AHTI4Q8XSKB32AD7Dr7iD5DI12jTDV6BNcZcHhEeKNo/iwTdAv0lZ/h4z19xLq/pVrhNG5ONRl+OHdUXeNJdEmUrwYiLo8bzIM/jp0Fuo91zXCrLM/tKwi7Wnx9SFi3YfdFDt5YCR23B90L24T6mDUOcLodjJpXBwGhYj0PjYuZ7UOLke+OpPFNUT34l7jImF0J7ZpUtWFpfUdRttBJSrNnu53ZrkCrFtY/8dFwujOWAYmrGNIiDj/pO1haMgCOK07xtuk9InJ8ywJ9IH5kpq+zwyp+3dtkDDPAVM05VXI8faiYDUUrm3CJBF0C1SkSh2uIFuEJpdxAfrLbCen3DRYjTtokjArMxLmBGFLuQo511BbwFxU7seW2Jx0Z15W8z+4omEKyA5XN5EtYGAx4GqhPE0O8NpiIUxdBkH7IrtO/oO2j6fRJyY/KMW0tFJYE7UpwkiHY/OAV0uAMNLWt5rkzvQlQRgpRsrUdDv8osTdQvneBgjTwUXCrEopaCHkLXqE0sF8lCW7JQYbeHGN5X80SZj6lKqwBr3/byPpM8YWK3Q+RAMNEKaAoVugJgmjC8wTJ/6J5D44Bzk1XVvFa5qyrRLuclYL5ZXFQJg41yl6C+XvUHqQHMy3zqjpcVHD1Kdk9eZC+aISJMwHQnkPA4SpcI0wazRlcZyBpCsQn5cgYT4TyrsZIIxzGkZ3HhLHG15aGNeWIGFqE/YRwmaBlGNRFIQpJNBYbR0mphOJMO1cI0xjAjLEQVMJEqbRYh3OEabJlpAeRl405whT5rWE04ShGAjj4QmTaPHqNUz+aJdgU9KqhGlnaRHnYWZMnSNMhSeMEyi3uAMzSphKTxgn0L5YCKPTMPV+/HKHZORrKAYN4wmTPyqLhTAbecI4Acl3pr4YCFPnxy93SAeVdZ4wHjp0ErbUTk1JZeiz16/w4+cEYdYlJXOCMNXAPahLV54wrQ/dPep1vtHdgP+SIXNdVqea3sA05BQznjD5Q+fB+DUqmeudqFsaB6DCoy3IU8MMA14iPB/RMj9+uUPnztkDFUS6ptmsMIUUNwnSEKaAil3yGNHh4Zf78XOCMNVsaNDbjRTBJdNqmL4xp7OefvxyR5LIVaeiAjRaJUwT8FtUyPMoTAb6+zHMDQWShzq7PsmLnVbDrAGORcVTi1qx34/dhKEe68fyHJJHapiRZHOSZdFbi0pj90WMndQd5J/htZTQAxW4YELCl34cKuL6sjwIAyqV3aFEn1Psg4pT52EeBwBvAPsmeGYRKqfTZSQ06Jkw3M0ELonxf6cAv/TjawztA43yUMJ1y92oZGWpImOYOhqIawC8huQBcjw2RK9g7XFugmdWo5JUHEl0ikPrhOmRgFh3IUds8IjGEcDrwB4JnpmNsvROJuOZUqEpYo8WEw8D+ydodwHwVPD3Xqgs9y2xGJW2r9QwMKQvylOYKWaj8jdEZpeNxSRDoePnkC01r//Y+0yJO4h5hY5v56cYp2E0zo4JwtR4G4snTBLs4MekdAhjIsjMexH2laOB/SLqeIaYOX1KCD2BC2P+7xPAbcJ3s4xKZTBfkoSNUUnIpWauw1D8tTaISRFDtBa4CEOhPPJOsBWG3sCSFtU3ok69C54XIjqgzP664fkElbg9F+WRN2FAhYdvCKr+Gr0PsMeG6BfYUJoPzXRgM9MNuUYYUEmjFuB9ZJLiF8GQ1ANnYCkWj4uEAYO5e0oIBWA8ycPIGyeMqaMBjzaAOEqi4ENEeSSBj0vn4Qnj4Qnj4Qnj4Qnj4Qnj4eEJ4+EJ45EP/g9USObBNcS0vgAAAABJRU5ErkJggg==';

	var self = this;

	this.takeAPhoto = function(){
		console.debug('takeAPhoto()');

		navigator.camera.getPicture(
			self.onSuccess, 
			self.onFail, 
			{ 
				quality: 50,
				encodingType: Camera.EncodingType.JPEG,
				//sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
				sourceType: Camera.PictureSourceType.CAMERA,
				destinationType: Camera.DestinationType.FILE_URI,
                targetWidth: this.options.dimension.match(/([0-9]+)x([0-9]+)/i)[1],
				targetHeight: this.options.dimension.match(/([0-9]+)x([0-9]+)/i)[2],
				saveToPhotoAlbum: true,
				// cameraDirection: Camera.Direction.BACK,
				// cameraDirection: Camera.Direction.FRONT,
			}
		);
	}

    this.onSuccess = function(imageURI) {
        console.info('onSuccess(): SUCCESS');

        switch (device.platform) {
            case 'browser':
                var src = "data:image/jpeg;base64," + imageURI;
                break;
            default:
                var src = imageURI;
                break;
        }

        self.photo_src = src;
        document.getElementById('photo').src = src;
    }

    this.onFail = function(message) {
        console.error('onFail(): '+message);
    }
}

angular.module('CameraModule',[]).
component('camera',{
	templateUrl: 'camera/camera.template.html',
	controller: CameraController,
	controllerAs: 'camCtrl',
});
