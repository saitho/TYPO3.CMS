.. include:: ../../Includes.txt

====================================================
Breaking: #88182 - jsfunc.inline.js has been dropped
====================================================

See :issue:`88182`

Description
===========

The JavaScript file :file:`jsfunc.inline.js` which was responsible for FormEngine's subcomponent IRRE has been
superseded by the rewritten `InlineControlContainer` component.


Impact
======

Requesting the file :file:`typo3/sysext/backend/Resources/Public/JavaScript/jsfunc.inline.js` will throw a 404 error.
Calling any method of the global :javascript:`inline` object will throw an error since the object doesn't exist anymore.


Affected Installations
======================

All installations of TYPO3 are affected.


Migration
=========

There is no migration available in most cases, since the `InlineControlContainer` component is now event-driven.

One exception is the former :javascript:`inline.delayedImportElement()` method, since this part is now based on
`postMessage`. For this approach, a small helper utility :javascript:`TYPO3/CMS/Backend/Utility/MessageUtility` has
been added.

See the example for a possible migration:

.. code-block:: javascript

   // Previous code from DragUploader
   window.inline.delayedImportElement(
       irre_object,
       'sys_file',
       file.uid,
       'file',
   );

   // New code
   require(['TYPO3/CMS/Backend/Utility/MessageUtility'], function(MessageUtility) {
       const message = {
           objectGroup: irre_object,
           table: 'sys_file',
           uid: file.uid,
       };
       MessageUtility.send(message);
   });

The :javascript:`MessageUtility.send()` method automatically gets the current domain of the request and attaches it to
the postMessage. :javascript:`MessageUtility.verifyOrigin()` must be used to check whether the incoming request was sent
by the current TYPO3 backend to avoid possible security issues.

.. index:: Backend, JavaScript, TCA, NotScanned, ext:backend
