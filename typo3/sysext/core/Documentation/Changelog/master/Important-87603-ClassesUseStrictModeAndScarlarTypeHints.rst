.. include:: ../../Includes.txt

==================================================================
Important: #87594 - Classes use strict mode and scarlar type hints
==================================================================

See :issue:`87594`

Description
===========

The following PHP classes now use strict mode
and their methods will force parameter types with scalar type hints:

- :php:`\TYPO3\CMS\Extbase\Core\Bootstrap`
- :php:`\TYPO3\CMS\Extbase\Security\Cryptography\HashService`
- :php:`\TYPO3\CMS\Extbase\Service\CacheService`
- :php:`\TYPO3\CMS\Extbase\Utility\TypeHandlingUtility`
- :php:`\TYPO3\CMS\Extbase\Service\EnvironmentService`
- :php:`\TYPO3\CMS\Extbase\Object\Container\Container`
- :php:`\TYPO3\CMS\Extbase\Persistence\Generic\Mapper\ColumnMap`
- :php:`\TYPO3\CMS\Extbase\Service\ExtensionService`
- :php:`\TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface`
- :php:`\TYPO3\CMS\Extbase\Configuration\AbstractConfigurationManager`
- :php:`\TYPO3\CMS\Extbase\Configuration\BackendConfigurationManager`
- :php:`\TYPO3\CMS\Extbase\Configuration\FrontendConfigurationManager`

.. index:: Backend, PHP-API, ext:extbase
