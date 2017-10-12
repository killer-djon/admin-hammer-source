Ext.define('HM.view.catalogs.CatalogViewController', {
	extend: 'HM.view.details.DetailsController',
	
	alias: 'controller.catalogview',
	
	privates: {

		/**
		 * Обновляем список загруженных файлов кроссов
		 * */
        refreshFilesList: function()
		{
			var refs = this.getRefs();
			refs['catalogFilesList'].getStore().load();
		},

        /**
         * Загружаем файл кроссов
         * */
		uploadFileCatalog: function()
		{
			this.showToast('Загрузить файл(ы)', [
				{
					xtype: 'panel',
					layout: 'fit',
					width: 250,
					items: [
						{
							xtype: 'xuploadpanel',
							url: '/upload',
                            menageFiles: true,
                            closerButton: true,
                            filters: [
                                {title : "XLS Файлы", extensions : "xls,xlsx,XLS,XLSX"},
                                {title : "CSV Файлы", extensions : "csv,CSV"}
							],
                            listeners: {
                                beforestart: function(uploadpanel) {

                                },
                                uploadstarted: function(uploadpanel) {
                                	console.log(uploadpanel);
                                },
                                uploadcomplete: function(uploadpanel, success, failures) {
                                    if ( success.length ) {
                                        this.getStore().reload();
                                    }
                                }
                            }
						}
					]
				}
			]);
			
		}
	}
});