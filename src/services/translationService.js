/** @format */

// Türkçe metin karşılıkları
export const TR_TEXTS = {
	settings: {
		title: 'Bilgi Yarışması',
		subtitle: 'Ayarları seçin ve yarışmaya başlayın!',
		category: 'Kategori',
		difficulty: 'Zorluk',
		questionCount: 'Soru Sayısı',
		questionType: 'Soru Tipi',
		startButton: 'Yarışmayı Başlat',
		anyCategory: 'Tüm Kategoriler',
		anyDifficulty: 'Tüm Zorluk Seviyeleri',
		multipleChoice: 'Çoktan Seçmeli',
		trueFalse: 'Doğru/Yanlış',
		questions: 'Soru',
	},
	categories: {
		'General Knowledge': 'Genel Kültür',
		'Science & Nature': 'Bilim & Doğa',
		'Entertainment: Books': 'Eğlence: Kitaplar',
		'Entertainment: Film': 'Eğlence: Film',
		'Entertainment: Music': 'Eğlence: Müzik',
		'Entertainment: Television': 'Eğlence: Televizyon',
		'Entertainment: Video Games': 'Eğlence: Video Oyunları',
		'Entertainment: Board Games': 'Eğlence: Masa Oyunları',
		'Science: Computers': 'Bilim: Bilgisayarlar',
		'Science: Mathematics': 'Bilim: Matematik',
		'Science: Gadgets': 'Bilim: Teknolojik Aletler',
		Mythology: 'Mitoloji',
		Sports: 'Spor',
		Geography: 'Coğrafya',
		History: 'Tarih',
		Politics: 'Politika',
		Art: 'Sanat',
		Celebrities: 'Ünlüler',
		Animals: 'Hayvanlar',
		Vehicles: 'Araçlar',
		Comics: 'Çizgi Romanlar',
		'Anime: Manga': 'Anime: Manga',
		Cartoon: 'Çizgi Film',
	},
	difficulty: {
		EASY: 'KOLAY',
		MEDIUM: 'ORTA',
		HARD: 'ZOR',
	},
	feedback: {
		correct: 'Doğru! 🎉',
		incorrect: 'Yanlış! 😔',
		correctAnswer: 'Doğru cevap:',
		tryAgain: 'Tekrar Dene',
		nextQuestion: 'Sonraki Soru',
		timeLeft: 'Kalan Süre',
		seconds: 'saniye',
	},
	game: {
		question: 'Soru',
		restart: 'Yeniden Başlat',
		correct: 'Doğru',
		incorrect: 'Yanlış',
		score: 'Skor',
		complete: 'Yarışma Tamamlandı!',
		playAgain: 'Tekrar Oyna',
		loading: 'Yükleniyor...',
		questionsLeft: 'Kalan Soru',
		totalQuestions: 'Toplam Soru',
		category: 'Kategori',
		difficulty: 'Zorluk',
	},
};

// Gelişmiş çeviri sözlüğü
const TRANSLATION_DICTIONARY = {
	// Temel kelimeler
	True: 'Doğru',
	False: 'Yanlış',
	or: 'veya',
	and: 've',
	the: '',
	a: '',
	an: '',
	in: 'içinde',
	of: '',
	to: '',
	is: '',
	are: '',
	was: '',
	were: '',
	which: 'hangi',
	what: 'ne',
	who: 'kim',
	where: 'nerede',
	when: 'ne zaman',
	why: 'neden',
	how: 'nasıl',

	// Sık kullanılan kelimeler
	following: 'aşağıdakilerden',
	correct: 'doğru',
	incorrect: 'yanlış',
	answer: 'cevap',
	question: 'soru',
	choose: 'seçiniz',
	select: 'seçiniz',
	pick: 'seçiniz',
	name: 'adı',
	called: 'olarak adlandırılan',
	known: 'olarak bilinen',
	famous: 'ünlü',
	best: 'en iyi',
	worst: 'en kötü',
	first: 'ilk',
	last: 'son',
	next: 'sonraki',
	previous: 'önceki',
	between: 'arasında',
	among: 'arasında',
	with: 'ile',
	without: 'olmadan',
	from: '-den',
	for: 'için',
	about: 'hakkında',
	according: 'göre',
	based: 'dayalı',
	during: 'sırasında',
	while: 'iken',
	before: 'önce',
	after: 'sonra',
	under: 'altında',
	over: 'üzerinde',
	into: 'içine',
	through: 'boyunca',
	by: 'tarafından',
	at: '-de',
	on: 'üzerinde',
	in: 'içinde',
	out: 'dışında',
	up: 'yukarı',
	down: 'aşağı',

	// Soru kelimeleri
	Which: 'Hangi',
	What: 'Ne',
	Who: 'Kim',
	Where: 'Nerede',
	When: 'Ne zaman',
	Why: 'Neden',
	How: 'Nasıl',
	Did: '',
	Does: '',
	Do: '',
	Is: '',
	Are: '',
	Was: '',
	Were: '',
	Will: '',
	Would: '',
	Could: '',
	Should: '',
	Can: '',
	May: '',
	Might: '',
	Must: '',
};

// Gelişmiş çeviri fonksiyonu
export const translateText = async (text) => {
	try {
		if (!text) return '';

		// HTML karakterlerini koru
		const htmlEntities = [];
		let processedText = text.replace(/&[^;]+;/g, (match) => {
			htmlEntities.push(match);
			return `###HTML${htmlEntities.length - 1}###`;
		});

		// Noktalama işaretlerini koru
		const punctuation = [];
		processedText = processedText.replace(
			/[.,!?;:'"()\[\]{}]/g,
			(match) => {
				punctuation.push(match);
				return `###PUNCT${punctuation.length - 1}###`;
			}
		);

		// Kelimeleri çevir
		let translatedText = processedText;
		Object.entries(TRANSLATION_DICTIONARY).forEach(([eng, tr]) => {
			const regex = new RegExp(`\\b${eng}\\b`, 'gi');
			translatedText = translatedText.replace(regex, tr);
		});

		// Noktalama işaretlerini geri ekle
		punctuation.forEach((punct, index) => {
			translatedText = translatedText.replace(
				`###PUNCT${index}###`,
				punct
			);
		});

		// HTML karakterlerini geri ekle
		htmlEntities.forEach((entity, index) => {
			translatedText = translatedText.replace(
				`###HTML${index}###`,
				entity
			);
		});

		// Gereksiz boşlukları temizle
		translatedText = translatedText
			.replace(/\s+/g, ' ')
			.replace(/\s([.,!?;:])/g, '$1')
			.trim();

		return translatedText;
	} catch (error) {
		console.error('Translation error:', error);
		return text;
	}
};

// Soru ve cevapları çevirme
export const translateQuestion = async (question) => {
	try {
		const translatedQuestion = {
			...question,
			question: await translateText(question.question),
			correct_answer: await translateText(question.correct_answer),
			incorrect_answers: await Promise.all(
				question.incorrect_answers.map((answer) =>
					translateText(answer)
				)
			),
			category:
				TR_TEXTS.categories[question.category] || question.category,
			difficulty:
				TR_TEXTS.difficulty[question.difficulty.toUpperCase()] ||
				question.difficulty,
			type:
				question.type === 'multiple'
					? 'Çoktan Seçmeli'
					: 'Doğru/Yanlış',
		};
		return translatedQuestion;
	} catch (error) {
		console.error('Question translation error:', error);
		return question;
	}
};
