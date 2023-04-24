<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInited0c0fb8f7a128d58f4c16bdf14249ba
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInited0c0fb8f7a128d58f4c16bdf14249ba', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInited0c0fb8f7a128d58f4c16bdf14249ba', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInited0c0fb8f7a128d58f4c16bdf14249ba::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}