# ahmetbaslik.com — kişisel site

Next.js 16, shadcn/ui ve **next-intl** ile **Türkçe / İngilizce** özgeçmiş sayfaları.

## Geliştirme

```bash
npm install
npm run dev
```

[http://localhost:3000/tr](http://localhost:3000/tr) veya `/en`.

## Production derlemesi

```bash
npm run build
npm start
```

## GitHub’a gönderme

1. GitHub’da boş bir repo oluşturun.
2. Yerelde (ilk kez):

```bash
git add .
git commit -m "feat: kişisel site — çok dilli CV"
git branch -M main
git remote add origin https://github.com/KULLANICI/REPO.git
git push -u origin main
```

`.gitignore` zaten `node_modules`, `.next`, `.env*` ve build çıktılarını dışarıda bırakır; API anahtarı kullanılmıyorsa ekstra gizli dosya gerekmez.

## Coolify ile yayın

Bu repoda kök dizinde bir **`Dockerfile`** vardır; `next.config.ts` içinde **`output: "standalone"`** kullanılıyor (küçük ve hızlı container imajı).

Coolify’da tipik ayarlar:

| Ayar | Değer |
|------|--------|
| Kaynak | GitHub repo (branch `main`) |
| Build tipi | Dockerfile (otomatik algılanır) |
| **Port** | **3000** (container içi) |
| Domain | Örn. `ahmetbaslik.com` — Coolify reverse proxy TLS verir |

Coolify genelde `PORT` ortam değişkenini ayarlar; Dockerfile bunu kullanır. Ekstra `NEXT_PUBLIC_*` değişkeni şu an tanımlı değil.

İlk deploy sonrası kök URL `/` → proxy ile `/tr` veya `/en` yönlendirmesi next-intl tarafından yapılır; canlıda `https://alanadiniz.com/tr` ve `https://alanadiniz.com/en` çalışmalıdır.

## Yerel Docker testi (isteğe bağlı)

```bash
docker build -t ahmetbaslik-cv .
docker run --rm -p 3000:3000 ahmetbaslik-cv
```

Tarayıcı: `http://localhost:3000/tr`
"# ahmetbaslik-cv" 
