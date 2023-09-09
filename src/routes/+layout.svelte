<script lang="ts">
	import { goto } from '$app/navigation';
</script>
<html lang="pt-BR">
	<body>
		<header class="header">
			<nav class="nav">
				<a href="/" class="logo">eriton</a>
				<button on:click={() => goto("/create")} class="button">
					criar nova postagem
				</button>
			</nav>
		</header>
		<main class="main">
			<slot></slot>
		</main>
	</body>
</html>

<style type="text/css">
.header{
	width: 100%;
	height: 60px;
}
.nav{
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 10px;
	padding: 10px;
}
.logo{
	font-family: "Arial", sans-serif;
	font-weight: bold;
	font-size: 1.5rem;
	text-transform: uppercase;
	text-decoration: none;
	color: cornflowerblue;
}

.button{
	background: none;
	border: 1px solid cornflowerblue;
	padding: 10px 20px;
	font-size: 1.2rem;
	font-weight: bold;
}
</style>