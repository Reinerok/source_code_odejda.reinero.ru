{"version":3,"sources":["script.js"],"names":["exports","main_core","catalog_entityCard","main_core_events","main_popup","ui_buttons","_classPrivateFieldInitSpec","obj","privateMap","value","_checkPrivateRedeclaration","set","privateCollection","has","TypeError","_isQuantityTraceNoticeShown","WeakMap","ProductCard","_EntityCard","babelHelpers","inherits","id","_this","settings","arguments","length","undefined","classCallCheck","this","possibleConstructorReturn","getPrototypeOf","call","assertThisInitialized","writable","createClass","key","getEntityType","onSectionLayout","event","_this2","_event$getCompatData","getCompatData","_event$getCompatData2","slicedToArray","section","eventData","visible","isSimpleProduct","isCardSettingEnabled","EventEmitter","subscribe","_event$getData$","isQuantityTraceRestricted","isWithOrdersMode","isInventoryManagementUsed","classPrivateFieldGet","field","getData","getId","_selectedValue","popup","Popup","content","Loc","getMessage","overlay","titleBar","closeByEsc","closeIcon","buttons","Button","text","className","events","click","classPrivateFieldSet","destroy","bind","onAfterClose","show","getChildren","forEach","hiddenFields","includes","setVisible","_event$getData$2","editor","sender","quantityTraceValue","_model","getField","_editor$getControlByI","getControlById","onGridUpdatedHandler","get","prototype","_event$getCompatData3","_event$getCompatData4","grid","getVariationGridId","getRows","getCountDisplayed","document","location","reload","onEditorAjaxSubmit","_event$getCompatData5","_event$getCompatData6","response","data","NOTIFY_ABOUT_NEW_VARIATION","showNotification","EntityCard","Reflection","namespace","window","BX","Catalog","Event","Main","UI"],"mappings":"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","file":"script.map.js"}