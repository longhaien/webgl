var DOMAIN_DEV = false;

fis
    .set('project.md5Length', 5)
    .set('project.ignore', ['node_modules/**', '/dev/**', './widget/**', 'output/**', '.git/**', 'fis-conf.js', '/package.json'])
    .set('media', fis.media()['_media']);


fis
    .match('*.{scss,sass}', {
        rExt: '.css',
        parser: fis.plugin('node-sass', {
            // options...
        })
    })

    .match('*.{scss,js}', {
        domain: DOMAIN_DEV
    })

//过滤掉被打包的资源。
fis.match('**', {
    deploy: [
        fis.plugin('skip-packed'),
        fis.plugin('local-deliver', {
            to: './dev'
        })
    ]
})