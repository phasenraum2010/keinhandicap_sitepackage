<?php

/**
 * Created by PhpStorm.
 * User: tw
 * Date: 04.11.17
 * Time: 19:54
 */

defined('TYPO3_MODE') or die();
call_user_func(
    function () {

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('keinhandicap_sitepackage', 'Configuration/TypoScript',
            'Kein-Handicap Sitepackage'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('keinhandicap_sitepackage', 'Configuration/TypoScript/host/dev',
            'Kein-Handicap Sitepackage Dev'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('keinhandicap_sitepackage', 'Configuration/TypoScript/host/live',
            'Kein-Handicap Sitepackage Live'
        );

    }
);
