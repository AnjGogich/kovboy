const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Behaviors.Sin,
		C3.Behaviors.Anchor,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Plugins.Audio,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.TiledBg.Acts.Destroy,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y
	];
};
self.C3_JsPropNameTable = [
	{фон: 0},
	{Платформер: 0},
	{СледитьЗа: 0},
	{персонаж: 0},
	{Твердый: 0},
	{земля: 0},
	{play: 0},
	{MENU: 0},
	{Мышь: 0},
	{монета: 0},
	{Синусоид: 0},
	{гоблин: 0},
	{СЧЕТ: 0},
	{Якорь: 0},
	{Пуля: 0},
	{пуля: 0},
	{Клавиатура: 0},
	{камень: 0},
	{зельеУменьшения: 0},
	{босс: 0},
	{зельеУвелечения: 0},
	{жизни: 0},
	{вода: 0},
	{шипи: 0},
	{кнопка: 0},
	{Текст: 0},
	{Аудио: 0},
	{кнопкаМеню: 0},
	{Текст2: 0}
];

self.InstanceType = {
	фон: class extends self.ITiledBackgroundInstance {},
	персонаж: class extends self.ISpriteInstance {},
	земля: class extends self.ISpriteInstance {},
	play: class extends self.ISpriteInstance {},
	MENU: class extends self.ITextInstance {},
	Мышь: class extends self.IInstance {},
	монета: class extends self.ISpriteInstance {},
	гоблин: class extends self.ISpriteInstance {},
	СЧЕТ: class extends self.ITextInstance {},
	пуля: class extends self.ISpriteInstance {},
	Клавиатура: class extends self.IInstance {},
	камень: class extends self.ISpriteInstance {},
	зельеУменьшения: class extends self.ISpriteInstance {},
	босс: class extends self.ISpriteInstance {},
	зельеУвелечения: class extends self.ISpriteInstance {},
	жизни: class extends self.ITiledBackgroundInstance {},
	вода: class extends self.ISpriteInstance {},
	шипи: class extends self.ISpriteInstance {},
	кнопка: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	Аудио: class extends self.IInstance {},
	кнопкаМеню: class extends self.ISpriteInstance {},
	Текст2: class extends self.ITextInstance {}
}