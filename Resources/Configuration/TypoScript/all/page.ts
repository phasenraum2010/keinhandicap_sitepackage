page {
	includeCSS {
		cssFileGoogleFontTitilliumWeb = https://fonts.googleapis.com/css?family=Titillium+Web
		cssFileMyOwn = EXT:keinhandicap_sitepackage/Resources/Public/css/my.css
	}
	includeJSFooter {
		jsFileMyOwn = EXT:keinhandicap_sitepackage/Resources/Public/js/my.js
	}
	10 {
		templateRootPaths {
			310 = {$plugin.tx_keinhandicap_sitepackage.view.templateRootPath}
			305 = EXT:keinhandicap_sitepackage/Resources/Private/Templates/
		}
		partialRootPaths {
			310 = {$plugin.tx_keinhandicap_sitepackage.view.partialRootPath}
			300 = EXT:keinhandicap_sitepackage/Resources/Private/Partials/
		}
		layoutRootPaths {
			310 = {$plugin.tx_keinhandicap_sitepackage.view.layoutRootPath}
			300 = EXT:keinhandicap_sitepackage/Resources/Private/Layouts/
		}
	}
}

page.config {
	headerComment (
--------------------------------------------------
|                                                |
|  TYPO3 Website - Development by                |
|                                                |
|  Thomas Woehlke | 2017 | www.thomas-woehlke.de |
|                                                |
--------------------------------------------------
	)
	index_enable = 1
	# Wenn gesetzt, werden externe Medien, auf die auf Seiten verlinkt wird, ebenfalls indiziert.
	index_externals = 1
}
